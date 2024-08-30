let bestGuitarPlayer = 'Jimi_Hendrix'
  , log = console.log;
let printBestGuitarPlayer = function(guitarPlayer) {
  if(guitarPlayer === bestGuitarPlayer) {
    log(`Best guitar player is ${guitarPlayer}`)
  } else {
    log(`Really? I guess ${bestGuitarPlayer} is much more better than ${guitarPlayer}`)
  }
}
exports.printBestGuitarPlayer = printBestGuitarPlayer;
