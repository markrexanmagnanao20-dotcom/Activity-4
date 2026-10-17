var map = L.map("map").setView(
    [6.758348027047825, 125.3094713122876],
    15
);

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: "&copy; OpenStreetMap contributors",
        maxZoom: 19
    }
).addTo(map);

var markers = [];
var markerCount = document.getElementById("markerCount");

map.on("click", function(event) {
    var latitude = event.latlng.lat;
    var longitude = event.latlng.lng;
    var placeName = prompt("Enter the name of this place:");

    if (placeName) {
        var marker = L.marker([latitude, longitude]).addTo(map);

        marker.bindPopup(
            "<b>" + placeName + "</b><br>" +
            "Latitude: " + latitude.toFixed(4) + "<br>" +
            "Longitude: " + longitude.toFixed(4)
        ).openPopup();

        markers.push(marker);
        markerCount.textContent = markers.length;
    }
});

document.getElementById("clearButton").addEventListener("click", function() {
    markers.forEach(function(marker) {
        map.removeLayer(marker);
    });

    markers = [];
    markerCount.textContent = 0;
});
