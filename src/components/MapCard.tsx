
import React, { useState } from 'react'
import { MapContainer, Marker, Polygon, Popup, TileLayer, Tooltip } from 'react-leaflet'
import { Card } from '@mui/material'
import { IMarker } from '../mocks/MapMock';


interface IMapCard {
    initialPosition: {
        lat: number;
        lng: number;
    }
    markers: IMarker[];
    polygon: {
        lat: number;
        lng: number;
    }[]
}

export function MapCard(props: IMapCard) {

    const [showPolygon, setShowPolygon] = useState<boolean>();

    const { initialPosition, polygon, markers } = props;

    function renderMarkers(markers: IMarker[]) {
        return (
            markers.map((marker: IMarker, index: number) => {
                return (
                    <Marker
                        position={marker.latlng}
                        key={`marker_${index}`}
                        eventHandlers={{
                            mouseover: () => {
                                if (marker.tooltipText === 'Poligno') {
                                    setShowPolygon(true)
                                }
                            },
                            mouseout: () => {
                                if (marker.tooltipText === 'Poligno') {
                                    setShowPolygon(false)
                                }
                            }
                        }}
                    >
                        <Popup>
                            <span className="font-bold text-1xl">{marker.name}</span>
                            <br />
                            <span>Tarefa <b>#1.{index + 1}</b></span>
                        </Popup>
                        {marker.tooltip && (
                            <Tooltip >
                                <span className="font-bold ">{marker?.tooltipText}</span>
                            </Tooltip>
                        )}
                    </Marker>
                )
            })
        )
    }


    return (
        <Card className="rounded border-4 border-gray-100 max-w-full my-4" >
            <MapContainer center={initialPosition} zoom={12} scrollWheelZoom={false} style={{ minHeight: "30vw", minWidth: "42vw" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {renderMarkers(markers)}
                {showPolygon && (
                    <Polygon pathOptions={{ color: 'blue' }} positions={polygon} />
                )}
            </MapContainer>
        </Card>
    )
}
