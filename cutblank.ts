String.prototype.greet = function (this: string){
    return "Hello, " + this + "!";
}

String.prototype.cutRedundantSpaces = function (this: string){
    return this.replace(/ +/g, " ").trim();
}


function go(){
    (document.getElementById("txaOutput") as HTMLTextAreaElement).value =
	(document.getElementById("txaInput") as HTMLTextAreaElement).value
	.replace(/\n/g, " ")
	.cutRedundantSpaces()
	.replace(/- /g, "");
}

/* document.body.innerHTML = "Tarou".greet();*/
