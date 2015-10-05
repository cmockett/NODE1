var luminosity = function(){
	return 0.2126*process.argv[2] + 0.7152*process.argv[3] + 0.0722*process.argv[4]
}


var islight = function(){
	if (luminosity()>155){
		console.log("light")
	}
	else{
		console.log("dark")
	}
}

islight(process.argv[2], process.argv[3], process.argv[4])