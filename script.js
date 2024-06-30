function firstWord(s) {
  // your code here
	let str=""
	s=s.trimstart()
	for(let i=0;i<s.length;i++){
		if(s.charAt(i)==" ")
	return str
	else
			str+=s.charAt(i)
		}
}

// Do not change the code below

// const s = prompt("Enter String:");
alert(firstWord(s));
