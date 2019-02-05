import React, { Component } from 'react';
import SimpleLink from '../simple-link.js';

export default class Home extends Component {

    render() {
        return (
            <div className='container-fluid'>
                <h4>The Focused Coder - 01 - Collaborative Project Sandbox</h4>
                <p>Maybe you can begin by creating a navbar?</p>
                <p>Add new pages to the views directory by copying the ./views/home/index.js format</p>
                <p>Keep in mind you cannot modify files at the same time as your collaborators, else you will have merge conflicts. Collaborate to work on disparate requirements.</p>
                <p>Ask questions in our Discord channel</p>

                <strong>Directory</strong>
                <ul>
                    <li><SimpleLink destination='/example' label='Example Navigation Page' /></li>
                </ul>
            </div>
        )
    }
}