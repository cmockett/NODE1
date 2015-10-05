var fs = require('fs')

var sourceText = fs.readFileSync('./source.txt', 'utf-8')

fs.writeFileSync('source_copy1.txt', sourceText)



// RAPHAELS ANSWER

// var fs = require('fs')
// var sourceFileName = process argv[2]
// var targetFileName = process.argv[3]
// var sourceFileContents = fs.ReadFileSync(sourceFileName, 'utf-8')
// fs.writeFileSync(targetFileName, sourceFileContents)