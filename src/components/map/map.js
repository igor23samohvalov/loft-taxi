import React, {useEffect, useState} from 'react';
import Header from '../header/header.js'
import mapboxgl from 'mapbox-gl';
import PaymentRef from '../paymentref/paymentref.js'
import { connect } from 'react-redux';
import RouteConstructor from '../routecontructor/routeconstructor.js';

function Map(props) {
    const [map, setMap] = useState(null)
    const mapRef = React.createRef();

    useEffect(() => {
        mapboxgl.accessToken = `pk.eyJ1Ijoic2FuZHlwbGFua3RvbiIsImEiOiJjazk5Z2M2YjMwMGwzM210NjdybzJsb2dpIn0.5VnHQjX3Hw1YEaR918xOIA`;
        
        const initializeMap = ({ setMap, mapRef }) => {
            const map = new mapboxgl.Map({
              container: mapRef.current,
              style: "mapbox://styles/mapbox/streets-v11", 
              center: [30.3350, 59.9342],
              zoom: 10
            });
      
            map.on("load", () => {
              setMap(map);
              map.resize();
            });
          };
      
          if (!map) initializeMap({ setMap, mapRef });
        }, [map]);
   
    return (
        <>
            <Header />
            <div style={{height: '100vh'}} ref={mapRef} data-testid='mapTest'/>
            {props.hasPaymentInfo ? (
                <RouteConstructor onMap={map} />
            ) : (
                <PaymentRef />
            )}
        </>
    )
}

const mapStateToProp = state => {
    return {
        hasPaymentInfo: state.hasPaymentInfo
    }
}

export default connect(mapStateToProp)(Map)