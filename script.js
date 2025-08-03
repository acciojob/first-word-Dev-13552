function firstWord(s) {
  // your code here
	s = s.trim()
	if(s.length == 0){
		return s;
	}
	let i = 0;
	let output = ""
	while(i < s.length && s[i] != " "){
		output += s[i]
		i++
	}
	
	return output
}


// Do not change the code below
const s = prompt("Enter String:");

alert(firstWord(s));
