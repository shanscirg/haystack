import React from 'react'

const SearchPanel = () => {
    return (
        <aside class="menu">
            <p class="menu-label">Coding Language</p>

            <select name='language'>
                <option>Any Language</option>
                <option>C#</option>
                <option>Java</option>
                <option>JavaScript</option>
                <option>PHP</option>
                <option>Python</option>            
            </select>

            <p class="menu-label">Tags</p>
            <ul class="menu-list">
                <li><a>Team Settings</a></li>
                <li>
                    <a class="is-active">Manage Your Team</a>
                    <ul>
                        <li><a>Members</a></li>
                        <li><a>Plugins</a></li>
                        <li><a>Add a member</a></li>
                    </ul>
                </li>
                <li><a>Invitations</a></li>
                <li><a>Cloud Storage Environment Settings</a></li>
                <li><a>Authentication</a></li>
            </ul>
            <p class="menu-label">
                Transactions
  </p>
            <ul class="menu-list">
                <li><a>Payments</a></li>
                <li><a>Transfers</a></li>
                <li><a>Balance</a></li>
            </ul>
        </aside>
    )
}

export default SearchPanel
