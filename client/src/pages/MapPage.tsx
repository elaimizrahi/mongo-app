/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import GoogleMapReact from "google-map-react";

function MapPage() {
  const markers: string[] = [];

  const setMarkers = function (markers: string[], e: any) {
    markers.push(e);
  };

  const generateKey = (pre: string) => {
    return `${pre}_${new Date().getTime()}`;
  };
  const addMemory = (e: any) => {
    setMarkers(markers, e);
    console.log(markers, "markers");
    localStorage.setItem(generateKey("memory"), JSON.stringify(e));
  };

  const logEvent = (e: any) => {
    console.log(e);
    addMemory(e);
  };
  function displayMarkers(markers: string[]) {
    console.log(markers, "markers1");
    return <div />;
  }
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}

export default MapPage;
