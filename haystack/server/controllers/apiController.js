const puppeteer = require('puppeteer')
const axios =  require('axios')

exports.getPackages = (req, res) => {
  const {language, keyword} = req.params
  res.json(`${language} + ${keyword}`)
}

