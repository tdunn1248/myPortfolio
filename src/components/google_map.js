import React, { Component } from 'react'

export default class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 8,
      center: {
        lat: 35.24889288,
        lng: -111.6513
      },
      mapTypeId: 'hybrid'
    })
  }
  render() {
    return (

      <div className='google-map-contain'><div className='google-map' ref='map' /></div>
    )
  }
}
