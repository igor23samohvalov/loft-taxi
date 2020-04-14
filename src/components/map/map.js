import React from 'react';
import Header from '../header/header.js'
import './map.css';

class Map extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header onClick={this.props.onClick}/>
                <div>
                    MAP
                </div>
            </React.Fragment>
       )
    }
}

export default Map