import React, { Component } from 'react';
import watchcase from './watchcase.module.css';

class WatchCase extends Component {

    render(){
        return(
        <div className={'col col--6 '+watchcase.case}>
            <h1>{this.props.title}</h1>
            <img src={'https://github.com/sqfmi/watchy-cases/raw/main/'+this.props.path} height='420' width='420' />
            <a className={'button button--outline button--info'} href={'https://github.com/sqfmi/watchy-cases/tree/main/' + this.props.title} target="_blank">GitHub</a>
        </div>
        )
    }
}

export default WatchCase;