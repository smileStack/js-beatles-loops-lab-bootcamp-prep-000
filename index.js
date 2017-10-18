const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

theBeatlesPlay(musicians,instruments);

function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(var m=0;m<musicians.length;m++){
    var str = musicians[m] + ' plays ' + instruments[m];
    array.push(str);
  }
  return array
}
