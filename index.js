// add solution here
function theBeatlesPlay(musicians,instruments){
  var musicPlay = []
  for (let i=0;i<musicians;i++){
    musicPlay[i] = musicians[i] + "plays" + instruments[i]
  }
  return musicPlay
}