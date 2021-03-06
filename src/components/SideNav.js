const markers = [
  {
    id: 'marker1',
    city: 'Singapore',
    color: 'red',
    coordinates: [1.3521, 103.8198],
    value: 50,
  },
  {
    id: 'marker1',
    city: 'Singapore',
    color: 'red',
    coordinates: [1.3521, 103.8198],
    value: 50,
  },
  {
    id: 'marker2',
    city: 'New York',
    color: 'blue',
    coordinates: [40.73061, -73.935242],
    value: 25,
  },
  {
    id: 'marker3',
    city: 'San Francisco',
    color: 'orange',
    coordinates: [37.773972, -122.431297],
    value: 35,
  },
  {
    id: 'marker4',
    city: 'Beijing',
    color: 'gold',
    coordinates: [39.9042, 116.4074],
    value: 135,
  },
  {
    id: 'marker5',
    city: 'London',
    color: 'green',
    coordinates: [51.5074, 0.1278],
    value: 80,
  },
  {
    id: 'marker6',
    city: 'Los Angeles',
    color: 'gold',
    coordinates: [29.7604, -95.3698],
    value: 54,
  },
];

const renderList = (props) => {
  return (
    markers.map((marker, i) => {
      return (
        <div
          key={i}
          className="info"
          style={{ padding: '10px 5px', color: marker.color }}
          onClick={
            () => props.onClick([{
              coordinates: marker.coordinates,
              focusAnimationDuration: 3000,
              focusDistanceRadiusScale: 4,
              focusEasingFunction: ['Linear', 'None'],
            }])
          }
        >
          {marker.city}
        </div>
      )
    })
  )
}

const SideNav = (props) => {
  return (
    renderList(props)
  );
}

export default SideNav;