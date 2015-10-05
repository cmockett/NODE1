var luminosity = function(){
	console.log(0.2126*process.argv[2] + 0.7152*process.argv[3] + 0.0722*process.argv[4])
}

luminosity(process.argv[2], process.argv[3], process.argv[4])