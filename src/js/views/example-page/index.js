import React, { Component } from 'react';
import SimpleLink from '../simple-link.js';

export default class ExamplePage extends Component {

    render() {
        return (
            <div className='container-fluid'>
                <p>This is an example page</p>
                <SimpleLink destination='/' label='Go Back' />
            </div>
        )
    }
}