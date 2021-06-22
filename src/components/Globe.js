import { useState } from 'react';
import ReactGlobe from 'react-globe';
import SideNav from './SideNav';

// import optional tippy styles for tooltip support
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

const markers = [
  {
    id: 'marker1',
    city: 'Singapore',
    color: 'red',
    coordinates: [1.3521, 103.8198],
    value: 10,
  },
  {
    id: 'marker1',
    city: 'Singapore',
    color: 'red',
    coordinates: [1.3521, 103.8198],
    value: 10,
  },
  {
    id: 'marker2',
    city: 'New York',
    color: 'blue',
    coordinates: [40.73061, -73.935242],
    value: 10,
  },
  {
    id: 'marker3',
    city: 'San Francisco',
    color: 'orange',
    coordinates: [37.773972, -122.431297],
    value: 10,
  },
  {
    id: 'marker4',
    city: 'Beijing',
    color: 'gold',
    coordinates: [39.9042, 116.4074],
    value: 10,
  },
  {
    id: 'marker5',
    city: 'London',
    color: 'green',
    coordinates: [51.5074, 0.1278],
    value: 10,
  },
  {
    id: 'marker6',
    city: 'Los Angeles',
    color: 'gold',
    coordinates: [29.7604, -95.3698],
    value: 10,
  },
];


// simple and extensive options to configure globe
const options = {
  // ambientLightColor: 'red',
  cameraRotateSpeed: 0.5,
  focusAnimationDuration: 2000,
  focusEasingFunction: ['Linear', 'None'],
  // pointLightColor: 'gold',
  pointLightIntensity: 1.5,
  globeGlowColor: 'blue',
  markerRadiusScaleRange: [0.005, 0.01],
  markerTooltipRenderer: marker => `${marker.city} (${marker.value})`,
};

let animations = [];

function Globe() {


  const [focus, setFocus] = useState(null)
  // const [animate, setAnimate] = useState();
  // const [globe, setGlobe] = useState(null)

  const onClick = (marker) => {
    console.log("ON CLICK CALLED FRON SIDE NAV:--", marker);
    setFocus(marker.coordinates);

  }


  const N = 300;
  const gData = [...Array(N).keys()].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    size: Math.random() / 3,
    color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
  }));


  // const [animations, setAnimations] = useState([]);
  // simple component usage
  return (
    <div>
      <div className="d-flex" style={{
        width: '25%',
        position: 'absolute',
        background: '#040404',
        bottom: '30px',
        left: '26px',
        borderRadius: '15px',
        zIndex:9999,
      }}>
        <SideNav onClick={(marker) => onClick(marker)} />
      </div>
      <ReactGlobe
        // globeBackgroundTexture="https://your/own/background.jpg"
        // globeCloudsTexture={null}
        // globeTexture="https://your/own/globe.jpg"
        // animations={animations}
        // onGetGlobe={setGlobe}
        initialCoordinates={[1.3521, 103.8198]}
        markers={markers}
        options={options}
        width={"100%"}
        // focus={[1.3521, 103.8198]}
        height={"100vh"}
        onClickMarker={(marker, markerObject, event) => console.log(marker, markerObject, event)}
        onMouseOutMarker={(marker, markerObject, event) => console.log(marker, markerObject, event)}
        onGlobeTextureLoaded={() => console.log('globe loaded')}
        onMouseOverMarker={(marker, markerObject, event) => console.log(marker, markerObject, event)}

        // globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        // pointsData={gData}
        // pointAltitude="size"
        // pointColor="color"
        // pointColor={() => "orange"}
        // pointAltitude={0}
        // pointRadius={0.2}
        // pointsMerge={true}

      />
    </div>
  );
}

export default Globe;