function checkString(string) {
	let storage = [];
	for (let i = 0; i < string.length; i++) {
		switch (string[i]) {
			case '(':case '{':case '[':
			storage.push(string[i]);
			break;
			case ')':
				if (storageEmpty(storage) || storageLastElement(storage) !== '(') {
					return false
				} else {
					storage.pop();
				}
				break;
			case '}':
				if (storageEmpty(storage) || storageLastElement(storage) !== '{') {
				return false
				} else {
					storage.pop();
				}
				break;
			case ']':
				if (storageEmpty(storage) || storageLastElement(storage) !== '[') {
					return false
				} else {
					storage.pop();
				}
				break;
			case '"':case "'":
				if (storageEmpty(storage) || storageLastElement(storage) !== string[i]) {
					storage.push(string[i]);
				} else {
					storage.pop();
			}
	    }
	}
    return storageEmpty(storage)
}

function storageEmpty(array) {
	return array.length === 0
}

function storageLastElement(array) {
	return array[array.length - 1]
}

let result = checkString("{a:1,b:function(){'}}");

(function printResult() {
    if(result) {
		console.log('There are no errors in this string.')
	} else {
		console.error('An error occured,please check your string')
	}
})();
