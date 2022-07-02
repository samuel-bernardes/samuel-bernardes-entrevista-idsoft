export interface IMarker {
    name: string;
    latlng: {
        lat: number,
        lng: number
    };
    tooltip: boolean;
    tooltipText?: string;
}

export const initialPosition = {
    lat: -3.6915319,
    lng: -40.3543809
}

export const markers: IMarker[] = [
    {
        name: 'Grupo IDSOFT',
        latlng: {
            lat: -3.6915319,
            lng: -40.3543809
        },
        tooltip: false
    }, {
        name: 'Grupo IDSOFT',
        latlng: {
            lat: -3.682998,
            lng: -40.340933
        },
        tooltip: true,
        tooltipText: "Olá, eu sou uma tooltip :)"
    }, {
        name: 'Grupo IDSOFT',
        latlng: {
            lat: -3.652998,
            lng: -40.320933
        },
        tooltip: true,
        tooltipText: "Poligno"
    },
];

export const polygon = [
    {
        lat: -3.67,
        lng: -40.35
    },
    {
        lat: -3.65,
        lng: -40.35
    },
    {
        lat: -3.65,
        lng: -40.30
    },
]