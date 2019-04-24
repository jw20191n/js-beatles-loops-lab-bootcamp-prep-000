// add solution here
function theBeatlesPlay(musicians,instruments){
  var musicPlay = []
  for (let i=0;i<musicians;i++){
    note = musicians[i] + "plays" + instruments[i]
    musicPlay.push(note) 
  }
  return musicPlay
}