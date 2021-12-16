let cookies = Array(100).fill([0,0])
for(let i =1; i < 16; i++){
	for(let j=1; j<101;j++){
		if(j % i == 0 || j==i) {
			cookies[j-1] =[cookies[j-1][0]+1,j,divisorsOf(j)]
		}
	}
}

function divisorsOf(j){
	let divisors = []
	for(let i = 0; i <=j;i++){
		if(j % i ==0) divisors.push(i)
}
	return divisors
}

console.log(cookies)

console.log(cookies.filter((c)=>c[0] % 2 ==0))
console.log(cookies.filter((c)=>c[0] % 2 ==1))
