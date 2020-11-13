const puppeteer = require('puppeteer');
const axios =  require('axios');

let matchedRepos;
let packageData= [];
let sendFlag = false

exports.getPackages = async (req, res, next) => {
  const {language, keyword} = req.params;
  
  getInitialPayload(language, keyword);

  setTimeout(() => {
    pullRepos(matchedRepos, keyword)
  }, 1500);
  
  let sendJson = setInterval(() => {
    if(sendFlag === true){
      res.status(200).json(...packageData)
      sendFlag = false
      clearInterval(sendJson)
    }
  }, 500)
}; 

function getInitialPayload (language, keyword) {
  const url = `https://api.github.com/search/repositories?q=${keyword}language:${language}&sort=stars&order=desc`;
  axios.get(url)
    .then(response => matchedRepos = response.data.items)
    .catch(err => console.error(err))
};

async function pullRepos (arr, keyword) {
  try {
    // pptr setup
  let browser = await puppeteer.launch({
    headless: true
  })
  let page = await browser.newPage()
  // loop over repos until matched tag is found
  for (let i = 0; i < 10; i++) {
    await page.goto(`${arr[i].html_url}`, { waitUntil: 'networkidle2' })
    // collect tag 'keyword' names in an array
    const tags = await page.$$eval('.mt-3 > .f6 > a', (anchors) =>
      anchors.map((anchor) => anchor.innerText)
    )
    // if any of the tags contain the search term, click that tag
    if (tags.includes(keyword)) {
      const index = tags.indexOf(keyword) + 1
      const navigationPromise = page.waitForNavigation({
        waitUntil: 'networkidle0'
      })
      await Promise.all([
        navigationPromise,
        page.click(`.mt-3 > .f6 > a:nth-child(${index})`)
      ])
      // creates object with data related to package
      const links = await page.$$eval('article > .px-3 h1 a:last-child', (links) =>
        links.splice(0, 5).map((target) => {
          return { href: target.href, name: target.innerText }
        })
      )
      // 'article .px-3 .d-flex.flex-items-start.ml-3 a' === (stars)
      // 'relative-time' .attributes.title.nodeValue === (last update)
      packageData.push(links)
      sendFlag = true
      return
    }
  }
  await browser.close()
  } catch (err) {
    console.error(err)
  }
}
