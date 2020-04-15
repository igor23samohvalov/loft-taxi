import React from 'react';
import Header from '../header/header.js'
import './map.css';

class Map extends React.Component {
    render() {
        return (
            <div>
                <Header onClick={this.props.onClick}/>
                <div>
                    MAP
                </div>
            </div>
       )
    }
}

export default Map