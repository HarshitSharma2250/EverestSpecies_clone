import React from 'react'
import './LoginPage.css'
import { useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup,ZoomControl  } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export function LoginPage() {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = mapRef.current?.leafletElement;
    if (map) {
      map.setView([19.0760, 72.8777], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(map);
    }
  }, []);

  const handleZoomIn = () => {
    const map = mapRef.current.leafletElement;
    map.zoomIn();
  };

  const handleZoomOut = () => {
    const map = mapRef.current.leafletElement;
    map.zoomOut();
  };

  return (
    <div className='loginContact'>
      <div className="mapLocation">
      <MapContainer
        id="map"
        center={[19.0760, 72.8777]}
        zoom={5}
        style={{ height: '400px' }}
        ref={mapRef}
        scrollWheelZoom={false} // Disable zooming on scroll
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='© OpenStreetMap contributors' />

        <Marker position={[19.0760, 72.8777]}>
          <Popup>
            Mumbai, India
          </Popup>
        </Marker>
        <ZoomControl position="bottomright" />
      </MapContainer>
      <div className='LeftRightBTN'>
        <button onClick={handleZoomIn}>+</button>
        <button onClick={handleZoomOut}>-</button>
        </div>
      </div>

<div className="Form_Info" >

<form action="">
<h3>Know More About India's Largest Spice Company</h3>
<h5>* Indicates Mandatory Fields</h5>



<div className="inputfields">
  <input type="text" placeholder='NAME*' required/>
<input type="text" placeholder='Company*'  required/>
<input type="text" placeholder='city*'  required/>
<input type="text" placeholder='state*'  required/>
<input type="text" placeholder='country*'  required/>

<select name="employType" id="">
  <option value=" ">enquery type</option>
  <option value="costumer queries">costumer queries</option>
  <option value="distributer queries">costumer queries</option>
</select>
<input type="email"  placeholder='...@gmail.com' required/>
<input type="number" placeholder='number' required/>
<input type="textarea" name="" id="" placeholder='message'/>
</div>

<input type="submit" className='submitInput' />
</form>
</div>

<div className="rightsideboxinf">
  <h3>Get in touch</h3>

  <div className="address">
  <i className="fa fa-address-card"></i>
  <div>
    <p>address</p>
  Krushal Commercial Complex, G. M. Road, Amar Mahal, Chembur (West), Mumbai - 400 089.
  </div>
  </div>

  <div className="address">
  <i className="fa fa-phone"></i>
  <div className='number'>
    <p>customer care number</p>
    121332.......</div>
  </div>

<div className="address">
<i className="fa fa-envelope"></i>
<div>
  <p>Email Id</p>
  sharma.harshit.....</div>
</div>

</div>


</div>

 
  );
}
