import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from "react-simple-maps";
import { getMarkers } from "./markers";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

class MapChart extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}

  }

  componentDidMount() {

    var result = localStorage.getItem("active-markers");
    let savedMarkers = (result !== null) ? JSON.parse(result) : [];

    let markerList = getMarkers(savedMarkers);
    this.setState({ markers: markerList })
  }

  setChecked = (value) => {

    let marker = this.state.markers.find(x => x.id === value.id);
    marker.isActive = !marker.isActive;

    this.setState({ markers: this.state.markers })

    let activeIds = this.state.markers.filter(x => x.isActive).map(x => x.id);
    localStorage.setItem("active-markers", JSON.stringify(activeIds));
  }


  render() {

    if (this.state.markers === undefined) {
      return null;
    }
    else {
      return (
        <div className="mapchart">
          <h1 className="title is-4" style={{ textAlign: "center", paddingTop: "0.25em", marginBottom: "0.5em" }}>Loke och Farfars ävertyrsbadslista V1</h1>
          <ComposableMap
            width="500"
            height="800"
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
              rotate: [-13, -62, 0],
              scale: 3400
            }}
          >
            {/* <ZoomableGroup zoom={1}> */}
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies
                    .map(geo => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#EAEAEC"
                        stroke="#D6D6DA"
                      />
                    ))
                }
              </Geographies>
              {this.state.markers.map(({ id, coordinates, isActive }) => (
                <Marker key={id} coordinates={coordinates}>
                  <circle r={12} fill="white" stroke={isActive ? 'green' : 'red'} strokeWidth={2} />
                  <text
                    textAnchor="middle"
                    y={5}
                    style={{ fontFamily: "system-ui"}}
                    fill={isActive ? 'green' : 'red'}
                  >
                    {id}
                  </text>
                </Marker>
              ))}
            {/* </ZoomableGroup> */}

          </ComposableMap>

          <p>Markera med en bock eller rösta med en siffra mellan 1-5.</p>
          <div className="legend-wrapper">

            {this.state.markers.map((marker) =>
              <div className="legend-box" key={marker.id}>
                <p className="legend-id">{marker.id}</p>
                <p className="legend-name">{marker.name}</p>

                <div className="field legend-checkbox-wrapper">
                  <label className="b-checkbox checkbox is-large" style={{ marginRight: "0px" }}>
                    <input type="checkbox" checked={marker.isActive} onChange={() => this.setChecked(marker)}></input>
                    <span className="check"></span>
                  </label>
                </div>

              </div>
            )}

          </div>
        </div>

      );
    }


  }

}

export default MapChart;