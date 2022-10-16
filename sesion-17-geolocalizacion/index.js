let markers, map;

function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  markers.push(
    new google.maps.Marker({
      position: {
        lat: 20.628717715701946,
        lng: -87.07478948566137,
      },
      map,
      title: "Playa del Carmen",
    }), 
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: -34.91107069430766,
        lng: -57.93883045503401,
      },
      map,
      title: "Estadio UNO",
    }) 
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 39.52258257557092,
        lng: 2.476549088359818,
      },
      map,
      title: "Santa ponsa, Palma de mallorca",
    })
  );
}
