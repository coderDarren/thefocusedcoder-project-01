import React, { Component } from 'react';
import history from '../history.js';

export default class SimpleLink extends Component 
{
    constructor(_props)
    {
        super(_props);
        this.__on_click__ = this.__on_click__.bind(this);
    }

    __on_click__()
    {
        history.push(this.props.destination);
    }

    render()
    {
        return (
            <div className='simple-link' onClick={this.__on_click__}>
                {this.props.label}
            </div>
        )
    }
}
