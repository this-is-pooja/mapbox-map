import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoicG9vamEyMjIyIiwiYSI6ImNsMDgyazF5azAxdjgzZHAzNDhmeThsaWMifQ.fQNfkNzRVCplPrHt25iYkw",
});

function Home() {
  const [currentLocation, setCurrentLocation] = useState([-0.2416815, 51.5285582]);
  const [Isviewport, setViewport] = useState(
    {
      viewport: {
        width: '100vh',
        height: '100vw',
        latitude: -0.2416815,
        longitude: 51.5285582,
        zoom: 16
      }
    }
  )
  const setUserLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      let newViewport = {
        height: "100vh",
        width: "100vw",
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        zoom: 12
      }
      setViewport({
        viewport: newViewport
      })
      const result = [position.coords.latitude, position.coords.longitude]
      setCurrentLocation(result);
      console.log(result);
    })
  }
  const navigate = useNavigate();
  const logout = () => {
    navigate("/login");
  }
  return (
    <>
      <Map
        {...Isviewport}
        style="mapbox://styles/mapbox/streets-v9"
        onViewportChange={(viewport => setViewport({ viewport }))}
        containerStyle={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <button onClick={setUserLocation} style={{ width: "12rem", backgroundColor: "#fff", position: "relative", border: "1px solid #E5383B" }} >My Location</button>
        <button onClick={logout} style={{ width: "4rem", margin: "1rem", backgroundColor: "#fff", position: "relative", border: "1px solid #e5383b", height: "3rem", borderRadius: "50%" }}>Logout</button>
        <Marker
          coordinates={currentLocation}
          anchor="bottom"
        >
          <ImLocation2 fontSize="6rem" />
        </Marker>
      </Map>
    </>
  );
}

export default Home;