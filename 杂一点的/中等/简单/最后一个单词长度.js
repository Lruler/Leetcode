var lengthOfLastWord = function (s) {
	let arr = s.split(' ')
	arr = arr.filter((i) => i !== '')
	if (arr.length > 0) return arr[arr.length - 1].length
	else return 0
}

