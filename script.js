
function mapLetters(string) {
	let obj = {};

	for(let i=0; i<string.length; i++) {
		if(!obj[string[i]]) {
			obj[string[i]] = [];
		}

		obj.string[i].push(i);
	}

	return obj;
}
mapLetters();