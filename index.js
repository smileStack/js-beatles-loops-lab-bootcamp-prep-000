
theBeatlesPlay(array1,array2);
function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(var m=0;m<musicians.length;m++){
    var str = musicians[m] + 'plays' + instruments[m];
    array.push(str);
  }
  return array
}
