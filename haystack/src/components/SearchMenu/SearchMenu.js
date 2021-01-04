// Will be an aside menu to filter results using
// Weekly Download, most recent update, stars, etc.
import React from 'react';
import './searchMenu.css';

const SearchMenu = () => {
    return (
        <article class="panel is-primary sidebar ml-3">
            <p class="panel-heading">
                Primary</p>
            <p class="panel-tabs">
                <a class="is-active">All</a>
                <a>Public</a>
                <a>Private</a>
                <a>Sources</a>
                <a>Forks</a>
            </p>
            <div class="panel-block">
                <p class="control has-icons-left">
                    <input class="input is-primary" type="text" placeholder="Search" />
                    <span class="icon is-left">
                        <i class="fas fa-search" aria-hidden="true"></i>
                    </span>
                </p>
            </div>
            <a class="panel-block is-active">
                <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                </span>bulma</a>
            <a class="panel-block">
                <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                </span>marksheet</a>
            <a class="panel-block">
                <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                </span>minireset.css</a>
            <a class="panel-block">
                <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                </span>jgthms.github.io</a>
        </article>
    )
}

export default SearchMenu;
