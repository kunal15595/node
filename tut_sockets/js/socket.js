$(document).ready(function(){
    $('#text').keypress(function(e){
      socket.emit('client_data', {'letter': String.fromCharCode(e.charCode)});
    });
  });

var socket = io.connect();

socket.on('message', function(data){
    console.log(data.message);
    console.log(data.packet);
});
socket.on('parcel', function(data){
    console.log(data.packet);
});
socket.on('date', function(data){
    console.log(data.date);
    $('#date').text(data.date);
});