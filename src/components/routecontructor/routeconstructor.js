import React, { useState } from 'react';
import NewRoute from './newroute.js';
import RouteDone from './routedone.js';


        
function RouteConstructor(props) {
    const [isRouteDone, setRouteBlock] = useState( false )

    return (
        <>
            {isRouteDone ? (
                <RouteDone onMap={props.onMap} onNewOrder={setRouteBlock}/>
            ) : (
                <NewRoute onMap={props.onMap} onNewOrder={setRouteBlock}/>
            )}
        </>
    )
}

export default RouteConstructor