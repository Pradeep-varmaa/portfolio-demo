"use client";

import "leaflet/dist/leaflet.css";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import React from "react";
import L from "leaflet";

const customIcon = L.icon({
  iconUrl: "/location.webp",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export default function MapComponent({ data }: any) {
  console.log(data, "Dataaaaaaaaaaa");

  return (
    <MapContainer
      center={[17.385, 78.4867]}
      zoom={6}
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <TileLayer
        attribution="© OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {data?.map((el: any, index: number) => (
        <Marker
          key={el.id || index}
          position={[
            Number(el.longitude),
            Number(el.latitude),
          ]}
          icon={customIcon}
        >
          <Popup>
            <div>
              <p>
                <strong>IP:</strong> {el.ip_address}
              </p>

              <p>
                <strong>Latitude:</strong> {el.latitude}
              </p>

              <p>
                <strong>Longitude:</strong> {el.longitude}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}