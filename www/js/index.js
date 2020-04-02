

// https://www.npmjs.com/package/jsonfile
console.log('index.js');

localStorage.clear();

localStorage.setItem("1", ["Bastida|Miguel|oleee"]);

var aux = localStorage.getItem('1').split("|");
var idAl= "1";
var nomAl = aux[0];
var apAl= aux[1];
var emAl = aux[2];

for (let index = 0; index < 10; index++) {
    $('#students tr:last').after('<tr><th scope="row">'+index+'</th><td>'+nomAl+'</td><td>'+apAl+'</td><td>'+emAl+'</td></tr>');
}











function populateDB(tx) {
    tx.executeSql('DROP TABLE IF EXISTS DEMO');
    console.log(0002)
    tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id NOT NULL AUTO_INCREMENT, data)');
    tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
  //  tx.executeSql('INSERT INTO DEMO VALUES ("Hola")');
  console.log(0003)
}




// Query the database
//
function queryDB(tx) {
    tx.executeSql('SELECT * FROM DEMO', [], querySuccess, errorCB);
}

// Query the success callback
//
function querySuccess(tx, results) {
    var len = results.rows.length;
    console.log("DEMO table: " + len + " rows found.");
    for (var i=0; i<len; i++){
        console.log("Row = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).data);
    }
}

// Transaction error callback
//
function errorCB(err) {
    console.log("Error processing SQL: "+err.code);
}

// Transaction success callback
//
function successCB() {
    var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
    db.transaction(queryDB, errorCB);
}

// PhoneGap is ready
//
function onDeviceReady() {
    var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
    db.transaction(populateDB, errorCB, successCB);
}







onDeviceReady();
