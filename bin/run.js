let lib = require('../lib')
  , args = process.argv.splice(process.execArgv.length + 2)
  , guitarPlayerName = args[0];
lib.printBestGuitarPlayer(guitarPlayerName);
