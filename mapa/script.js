let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 0, lng: 0 },
        zoom: 2, // Adjust the zoom level as needed
    });

    // Add event listener to add marker on click
    map.addListener("click", (event) => {
        addMarker(event.latLng);
    });
}

function addMarker(location) {
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });

    // Add event listener to show info window on click
    marker.addListener("click", () => {
        const infoWindow = new google.maps.InfoWindow({
            content: "<h3>This is a marker</h3>", // You can customize the content here
        });
        infoWindow.open(map, marker);
    });
}
