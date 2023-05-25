function pattern_count(input, pattern) {
	//function dengan param input dan pattern
	if (pattern === "") {
		//kondisi ketika string kosong menghasilkan hasil 0 seperti soal C
		return 0;
	}

	let count = 0;

	//mengatur sisa indeks pada input yang diperiksa untuk dibandingkan dengan pola
	for (let i = 0; i <= input.length - pattern.length; i++) {
		let check = true;

		//membandingkan setiap input dalam pola yang sesuai
		for (let j = 0; j < pattern.length; j++) {
			if (input[i + j] !== pattern[j]) {
				check = false;
				break;
			}
		}

		//jika check bernilai true maka count bertambah
		if (check) {
			count++;
		}
	}
	return count;
}

// const input = "palindrom";
// const pattern = "ind";

// const input = "abakadabra";
// const pattern = "ab";

// const input = "hello";
// const pattern = "";

// const input = "ababab";
// const pattern = "aba";

// const input = "aaaaaa";
// const pattern = "aa";

const input = "hell";
const pattern = "hello";

console.log(pattern_count(input, pattern));
