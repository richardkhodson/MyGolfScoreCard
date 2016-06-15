/**
 * Created by richardhodson on 6/4/16.
 */

// Function for google maps called initMap
/** function initMap() {
    var myLatLng = {lat: 40.4295033232823, lng: -111.902993917466};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Thanksgiving Point Golf Course'
    });
}
 ...*/

function addPlayer() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(7);
    var cell1 = row.insertCell(0).innerHTML = '<input type="text" id="playerName">';
    var cell2 = row.insertCell(1).innerHTML = '<input size="1">';
    var cell3 = row.insertCell(2).innerHTML = '<input size="1">';
    var cell4 = row.insertCell(3).innerHTML = '<input size="1">';
    var cell5 = row.insertCell(4).innerHTML = '<input size="1">';
    var cell6 = row.insertCell(5).innerHTML = '<input size="1">';
    var cell7 = row.insertCell(6).innerHTML = '<input size="1">';
    var cell8 = row.insertCell(7).innerHTML = '<input size="1">';
    var cell9 = row.insertCell(8).innerHTML = '<input size="1">';
    var cell10 = row.insertCell(9).innerHTML = '<input size="1">';
    var cell11 = row.insertCell(10);
    var cell12 = row.insertCell(11).innerHTML = '<input size="1">';
    var cell13 = row.insertCell(12).innerHTML = '<input size="1">';
    var cell14 = row.insertCell(13).innerHTML = '<input size="1">';
    var cell15 = row.insertCell(14).innerHTML = '<input size="1">';
    var cell16 = row.insertCell(15).innerHTML = '<input size="1">';
    var cell17 = row.insertCell(16).innerHTML = '<input size="1">';
    var cell18 = row.insertCell(17).innerHTML = '<input size="1">';
    var cell19 = row.insertCell(18).innerHTML = '<input size="1">';
    var cell20 = row.insertCell(19).innerHTML = '<input size="1">';
    var cell21 = row.insertCell(20);
    var cell22 = row.insertCell(21);
    
}

function myDeleteFunction() {
    document.getElementById("myTable").deleteRow(7);
}

function myHandicap() {
    document.getElementById("hcp1").innerHTML = "3";
    document.getElementById("hcp2").innerHTML = "3";
    document.getElementById("hcp3").innerHTML = "3";
    document.getElementById("hcp4").innerHTML = "3";
    document.getElementById("hcp5").innerHTML = "3";
    document.getElementById("hcp6").innerHTML = "3";
    document.getElementById("hcp7").innerHTML = "3";
    document.getElementById("hcp8").innerHTML = "3";
    document.getElementById("hcp9").innerHTML = "3";

    document.getElementById("hcp10").innerHTML = "3";
    document.getElementById("hcp11").innerHTML = "3";
    document.getElementById("hcp12").innerHTML = "3";
    document.getElementById("hcp13").innerHTML = "3";
    document.getElementById("hcp14").innerHTML = "3";
    document.getElementById("hcp15").innerHTML = "3";
    document.getElementById("hcp16").innerHTML = "3";
    document.getElementById("hcp17").innerHTML = "3";
    document.getElementById("hcp18").innerHTML = "3";

}
// Call the function here
myHandicap();