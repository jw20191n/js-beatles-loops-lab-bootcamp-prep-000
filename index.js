// add solution here
function theBeatlesPlay(musicians,instruments){
  var musicPlay = []
  for (let i=0;i<musicians.length;i++){
    musicPlay.push(musicians[i] + "plays" + instruments[i]) 
  }
  return musicPlay
}