// JAVASCRIPT

//  javascript google maps

var pickMarker, dropMarker;

function initMap() {
    map = new google.maps.Map(document.getElementById('nzMap'), {
        center: {
            lat: -41.6262626,
            lng: 173.2147094
        },
        zoom: 6,


        // map
        styles: [{
                elementType: 'geometry',
                stylers: [{
                    color: '#708a6c'
                }]
            }, //land color
            {
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#f0ead3'
                }]
            }, //stroke around city names
            {
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#262626'
                }]
            }, //color inside country name
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#262626'
                }] // text inside city names
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#262626'
                }] //text of important places, hospital supermarket etc
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{
                    color: '#3e4e3c'
                }] // color of national parks green land
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#262626'
                }] // national park names
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{
                    color: '#423424'
                }] // color of roads
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#423424'
                }] // stroke of roads
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#262626'
                }] // colour of street mnames
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{
                    color: '#4b4238'
                }] //colour of highways
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#4b4238'
                }] //colour of highways stroke
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#262626'
                }] //main road text color
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{
                    color: '#ac8457'
                }] // train lines/ferry etc
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#ac8457'
                }] // train lines/ferry etc text colour
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{
                    color: '#262626'
                }] //ocean color
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#FCBB76'
                }] //text in water
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#FCBB76'
                }] //stroke of text in water
            }
        ]
    });
}


// to help the map function
$(document).ready(function () {
    initMap();
});

// Show and hide footers etc
$(document).ready(function () {
    $("#startButton").click(function () {
        $("#start").hide();
        $("#myFooter").hide();
        $("#nzRoad").hide();
        $("#hiddenPickup").show();
        $("#nzMap").show();
    });
    $("#myLogo").click(function () {
        $("#start").show();
        $("#myFooter").show();
        $("#nzRoad").show();
        $("#hiddenPickup").hide();
        $("#hiddenDropOff").hide();
        $("#hiddenDays").hide();
        $("#hiddenPeople").hide();
        $("#hiddenVehicle").hide();
        $("#nzMap").hide();
    });
    $("#backPick").click(function () {
        $("#nzMap").hide();
        $("#hiddenPickup").hide();
        $("#myFooter").show();
        $("#nzRoad").show();
        $("#start").show();
    });
    $("#forwardPick").click(function () {
        $("#hiddenPickup").hide();
        $("#hiddenDropOff").show();
    });
    $("#backDrop").click(function () {
        $("#hiddenDropOff").hide();
        $("#hiddenPickup").show();
    });
    $("#backDays").click(function () {
        $("#hiddenDays").hide();
        $("#hiddenDropOff").show();
    });
    $("#forwardDrop").click(function () {
        $("#hiddenDropOff").hide();
        $("#hiddenDays").show();
    });
    $("#backPeople").click(function () {
        $("#hiddenPeople").hide();
        $("#hiddenDays").show();
    });
    $("#forwardDays").click(function () {
        $("#hiddenDays").hide();
        $("#hiddenPeople").show();
    });
    $("#backVehicle").click(function () {
        $("#hiddenVehicle").hide();
        $("#hiddenPeople").show();
    });
    $("#forwardPeople").click(function () {
        $("#hiddenPeople").hide();
        $("#hiddenVehicle").show();
    });
    $("#confirmMoto, #confirmCoupe, #confirmHatch, #confirmFam").click(function () {
        $("#hiddenVehicle").hide();
        $("#nzMap").hide();
        $("#start").show();
        $("#myFooter").show();
        $("#nzRoad").show();
    });

    // java script for plus minus counter for days
    $('#days').prop('disabled', true);
    $(document).on('click', '#dayPlus', function () {
        console.log(parseInt($('#days').val()))
        if (parseInt($('#days').val()) <= 14) {
            $('#days').val(parseInt($('#days').val()) + 1);
        }
    });
    $(document).on('click', '#dayMinus', function () {
        if ($('#days').val() > 1) {
            $('#days').val(parseInt($('#days').val()) - 1);
        }
    });

    // java script for plus minus counter for people  
    $('#people').prop('disabled', true);
    $(document).on('click', '#peopPlus', function () {
        console.log(parseInt($('#people').val()))
        if (parseInt($('#people').val()) <= 6) {
            $('#people').val(parseInt($('#people').val()) + 1);
        }
    });
    $(document).on('click', '#peopMinus', function () {
        if ($('#people').val() > 1) {
            $('#people').val(parseInt($('#people').val()) - 1);
        }
    });


});



var pickUp = ""

function pickAuck() {
    pickUp = "Auckland";
    if (pickMarker && pickMarker.setMap) {
        pickMarker.setMap(null);
    }
    pickMarker = new google.maps.Marker({
        position: {
            lat: -36.8525879,
            lng: 174.7491168
        },
        map: map,
        icon: "images/png/greenpin.png",
        title: 'Pick Up Location Auckland'
    });
}

function pickTaupo() {
    pickUp = "Taupo";
    if (pickMarker && pickMarker.setMap) {
        pickMarker.setMap(null);
    }
    pickMarker = new google.maps.Marker({
        position: {
            lat: -38.6865437,
            lng: 176.0728046
        },
        map: map,
        icon: "images/png/greenpin.png",
        title: 'Pick Up Location Taupo'
    });
}

function pickWgtn() {
    pickUp = "Wellington";
    if (pickMarker && pickMarker.setMap) {
        pickMarker.setMap(null);
    }
    pickMarker = new google.maps.Marker({
        position: {
            lat: -41.29329,
            lng: 174.7755687
        },
        map: map,
        icon: "images/png/greenpin.png",
        title: 'Pick Up Location Wellington'
    });
}

function pickChurch() {
    pickUp = "Christchurch";
    if (pickMarker && pickMarker.setMap) {
        pickMarker.setMap(null);
    }
    pickMarker = new google.maps.Marker({
        position: {
            lat: -43.5321127,
            lng: 172.6324856
        },
        map: map,
        icon: "images/png/greenpin.png",
        title: 'Pick Up Location Christchurch'
    });
}

function pickQueen() {
    pickUp = "Queenstown";
    if (pickMarker && pickMarker.setMap) {
        pickMarker.setMap(null);
    }
    pickMarker = new google.maps.Marker({
        position: {
            lat: -45.0314599,
            lng: 168.6610323
        },
        map: map,
        icon: "images/png/greenpin.png",
        title: 'Pick Up Location Queenstown'
    });
}

// places lat and lng array

var locations = [{
        name: "Auckland",
        lat: -36.8525879,
        lng: 174.7491168
    },
    {
        name: "Taupo",
        lat: -38.6865437,
        lng: 176.0728046
    },
    {
        name: "Wellington",
        lat: -41.29329,
        lng: 174.7755687
    },
    {
        name: "Christchurch",
        lat: -43.5321127,
        lng: 172.6324856
    },
    {
        name: "Queenstown",
        lat: -45.0314599,
        lng: 168.6610323
    },
];

// storing drop off validation
$("#forwardDrop").show();
var dropOff = ""

function dropAuck() {
    dropOff = "Auckland";
    if (dropMarker && dropMarker.setMap) {
        dropMarker.setMap(null);
    }
    dropMarker = new google.maps.Marker({
        position: {
            lat: -36.8525879,
            lng: 174.7491168
        },
        map: map,
        icon: "images/png/redpin.png",
        title: 'Drop Off Location Auckland'
    });
    console.log(pickUp, dropOff)
    if (pickUp.trim() === dropOff.trim()) {
        alert("please choose different pick up and drop off locations")
        $("#forwardDrop").hide();
    } else if (pickUp.trim() !== dropOff.trim()) {
        console.log("hello")
        $("#forwardDrop").show();
    }
}

function dropTaupo() {
    dropOff = "Taupo";
    if (dropMarker && dropMarker.setMap) {
        dropMarker.setMap(null);
    }
    dropMarker = new google.maps.Marker({
        position: {
            lat: -38.6865437,
            lng: 176.0728046
        },
        map: map,
        icon: "images/png/redpin.png",
        title: 'Drop Off Location Taupo'
    });
    if (pickUp.trim() === dropOff.trim()) {
        alert("please choose different pick up and drop off locations")
        $("#forwardDrop").hide();
    } else if (pickUp.trim() !== dropOff.trim()) {
        console.log("hello")
        $("#forwardDrop").show();
    }
}

function dropWgtn() {
    dropOff = "Wellington";
    if (dropMarker && dropMarker.setMap) {
        dropMarker.setMap(null);
    }
    dropMarker = new google.maps.Marker({
        position: {
            lat: -41.29329,
            lng: 174.7755687
        },
        map: map,
        icon: "images/png/redpin.png",
        title: 'Drop Off Location Wellington'
    });
    if (pickUp.trim() === dropOff.trim()) {
        alert("please choose different pick up and drop off locations")
        $("#forwardDrop").hide();
    } else if (pickUp.trim() !== dropOff.trim()) {
        console.log("hello")
        $("#forwardDrop").show();
    }
}

function dropChurch() {
    dropOff = "Christchurch";
    if (dropMarker && dropMarker.setMap) {
        dropMarker.setMap(null);
    }
    dropMarker = new google.maps.Marker({
        position: {
            lat: -43.5321127,
            lng: 172.6324856
        },
        map: map,
        icon: "images/png/redpin.png",
        title: 'Drop Off Location Christchurch'
    });
    if (pickUp.trim() === dropOff.trim()) {
        alert("please choose different pick up and drop off locations")
        $("#forwardDrop").hide();
    } else if (pickUp.trim() !== dropOff.trim()) {
        console.log("hello")
        $("#forwardDrop").show();
    }
}

function dropQueen() {
    dropOff = "Queenstown";
    if (dropMarker && dropMarker.setMap) {
        dropMarker.setMap(null);
    }
    dropMarker = new google.maps.Marker({
        position: {
            lat: -45.0314599,
            lng: 168.6610323
        },
        map: map,
        icon: "images/png/redpin.png",
        title: 'Drop Off Location Queenstown'
    });
    if (pickUp.trim() === dropOff.trim()) {
        alert("please choose different pick up and drop off locations")
        $("#forwardDrop").hide();
    } else if (pickUp.trim() !== dropOff.trim()) {
        console.log("hello")
        $("#forwardDrop").show();
    }
}

function validatePlaces() {
    if ((pickUp == "") || (dropOff == "")) {
        alert("please choose pick up and drop off locations")
        $("#forwardDrop").hide();
    } else if (pickUp.trim() !== dropOff.trim()) {
        console.log("hello")
        $("#forwardDrop").show();
    }
}



//google maps distance matrix
var days = 0;
var people = 0;
var dist;

function distance(){

    for (i=0; i<locations.length; i++){
        if (pickUp==locations[i].name){
            lat1=locations[i].lat;
            lng1=locations[i].lng;
        }
    }
    for (i=0; i<locations.length; i++){
        if (dropOff==locations[i].name){
            lat2=locations[i].lat;
            lng2=locations[i].lng;
        }
    }
    if ((lat1 == lat2) && (lng1 == lng2)) {
        return 0;
      }
      else {
        
        var radlat1 = Math.PI * lat1/180;
        var radlat2 = Math.PI * lat2/180;
        var radlon1 = Math.PI * lng1/180
        var radlon2 = Math.PI * lng2/180
        var theta = lng1-lng2;
        var radtheta = Math.PI * theta/180;
         dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
          dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit=="K") { dist = dist * 1.609344 }
        if (unit=="N") { dist = dist * 0.8684 }
        
        dist= Math.round(dist);
      console.log(dist);
        return dist;
      }
}

var unit="K";
function dispMoto() {
    console.log(pickUp, dropOff);
    console.log(pickUp, dropOff, days, people);
    distance();
    var modDist = (dist / 100)  
    console.log(modDist)
    var total = (days * 109) + ((modDist * 3.7)* 2.16);
    console.log(total);
    document.getElementById("motoDist").innerHTML = dist + " Km";
    document.getElementById("motoPick").innerHTML = pickUp;
    document.getElementById("motoDrop").innerHTML = dropOff;
    document.getElementById("motoDays").innerHTML = days;
    document.getElementById("motoPeople").innerHTML = people;
    document.getElementById("motoTotal").innerHTML = "$" + total.toFixed(2);
}

function dispCoupe() {
    console.log(pickUp, dropOff);
    console.log(pickUp, dropOff, days, people);
    distance();
    var modDist = (dist / 100)
    console.log(modDist)
    var total = (days * 129) + ((modDist * 8.5)) * 2.16;
    console.log(total);
    document.getElementById("coupeDist").innerHTML = dist + " Km";
    document.getElementById("coupePick").innerHTML = pickUp;
    document.getElementById("coupeDrop").innerHTML = dropOff;
    document.getElementById("coupeDays").innerHTML = days;
    document.getElementById("coupePeople").innerHTML = people;
    document.getElementById("coupeTotal").innerHTML = "$" + total.toFixed(2);
}
var distance;

function dispHatch() {
    console.log(pickUp, dropOff);
    console.log(pickUp, dropOff, days, people);
    distance();
    var modDist = (dist / 100)
    console.log(modDist)
    var total = (days * 144) + ((modDist * 9.7)) * 2.16;
    console.log(total);
    document.getElementById("hatchDist").innerHTML = dist + " Km";
    document.getElementById("hatchPick").innerHTML = pickUp;
    document.getElementById("hatchDrop").innerHTML = dropOff;
    document.getElementById("hatchDays").innerHTML = days;
    document.getElementById("hatchPeople").innerHTML = people;
    document.getElementById("hatchTotal").innerHTML = "$" + total.toFixed(2);
}

function dispFamily() {
    console.log(pickUp, dropOff);
    console.log(pickUp, dropOff, days, people);
    distance();
    var modDist = (dist / 100)
    console.log(modDist)
    var total = (days * 200) + ((modDist * 17)) * 2.16;
    console.log(total);
    document.getElementById("familyDist").innerHTML = dist + " Km";
    document.getElementById("familyPick").innerHTML = pickUp;
    document.getElementById("familyDrop").innerHTML = dropOff;
    document.getElementById("familyDays").innerHTML = days;
    document.getElementById("familyPeople").innerHTML = people;
    document.getElementById("familyTotal").innerHTML = "$" + total.toFixed(2);
}


// vehicle filter
$("#hatch").hide();
$("#moto").hide();
$("#coupe").hide();
$("#family").hide();

function dispVehicle() {
    days = document.getElementById("days").value
    people = document.getElementById("people").value
    console.log(pickUp, dropOff, days, people);
    if ((people == 1) && (days <= 5)) {
        $("#moto").show();
    }
    if ((people <= 2) && (days <= 10)) {
        $("#coupe").show();
    }
    if ((people <= 5) && (days >= 3) && (days <= 10)) {
        $("#hatch").show();
    }
    if ((people >= 2) && (days >= 2)) {
        $("#family").show();
    }
}

