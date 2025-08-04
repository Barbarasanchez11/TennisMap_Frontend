import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";



mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

export default function Map() {
    const mapContainer = useRef(null);
  
    useEffect(() => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [-74.006, 40.7128],
        zoom: 9,
      });
  
      map.addControl(new mapboxgl.NavigationControl());
  
      return () => map.remove();
    }, []);
  
    return (
      <div
        ref={mapContainer}
        style={{ width: "100%", height: "100vh", border: "2px solid red" }}
      />
    );
  }