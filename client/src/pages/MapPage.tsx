import React from "react"
import { Map, Marker } from "pigeon-maps"

function MapPage() {

    const [map, setMap] = React.useState(null);
    const markers : string[] = [];

    const setMarkers = function (markers: string[], e: any){
        markers.push(e);
    }

    

    const generateKey = (pre: string) => {
        return `${ pre }_${ new Date().getTime() }`;
    }
    const addMemory = (e: any) => {
        setMarkers(markers, e);
        console.log(markers,"markers");
        localStorage.setItem(generateKey("memory"), JSON.stringify(e));
    }

    const logEvent = (e: any) => {
        console.log(e);
        addMemory(e);
    }
    function displayMarkers (markers: string[]) {
        console.log(markers, "markers1");
            return (
                <div/>
            )
        
    }


  return (
    <Map height={300} defaultCenter={[50.879, 20.6997]} defaultZoom={11} onClick={logEvent}>
        {displayMarkers(markers)}
      <Marker width={50} anchor={[43.4643, -80.5204]} />
    </Map>
  )
}

export default MapPage