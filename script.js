function firstWord(s) {
  // your code here
	let str=""
	let i=0
	while(s.charAt(i)!=" " && i<s.length){
		str+=s.charAt(i)
	i++
	}
	return str
}

// Do not change the code below

// const s = prompt("Enter String:");
alert(firstWord(s));
