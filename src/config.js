import { councilAdvice, food, recycling, digiAccess } from "./themes/example";

/* App config.
mapConfig stores options for Leaflet maps.   tileLayer defines the provider
for background mapping.
*/

const appConfig = {
    Title: "B&NES",
    SubTitle: "Local Services",
    Info: "This map can help you find the location of useful local services in Bath & North East Somerset."
};

const mapConfig = {
    params: {
        center: [51.38257, -2.35870],
        zoom: 13,
        attributionControl: true,
        zoomControl: false,
        maxBounds: ([[51.2, -2.651138], [51.5, -2.204475]]),
    },
    tileLayer: {
        uri: "https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png",
        params: {
            minZoom: 11,
            attribution: "&copy; OpenStreetMap contributors &amp; <a href=&quot;https://wikimediafoundation.org/wiki/Maps_Terms_of_Use&quot;>Wikimedia</a>",
            id: '',
            accessToken: ''
        },
    },
    search: {
        // Defines the parameter for OSM nominatim search
        // See https://wiki.openstreetmap.org/wiki/Nominatim for details on search params
        viewbox: "-2.744865,51.253106,-2.110405,51.457216",
        bounded: 1,
        limit: 10
    }
};

const appThemes = [councilAdvice, food, recycling, digiAccess];

export {
    mapConfig, appThemes, appConfig
};
