const array = [12, 9, 30, "A", "M", 99, 82, "J", "N", "B"];

const char = [];
const num = [];

// memisahkan huruf dan angka dengan looping per index
for (let i = 0; i < array.length; i++) {
	if (isNaN(array[i])) {
		char.push(array[i]);
	} else {
		num.push(array[i]);
	}
}

// mensortir huruf dan angka dengan .sort lalu menggabungkan huruf dan angka dengan .concat
const result = char.sort().concat(num.sort((a, b) => a - b));

console.log(result);
