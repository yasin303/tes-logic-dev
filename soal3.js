function countAndSorts(input) {
	const obj = {}; //untuk menampung huruf di dalam objek

	for (let i = 0; i < input.length; i++) {
		//melooping semua index dari input
		const char = input[i];

		if (char === " ") {
			// jika ada spasi maka lanjut
			continue;
		}

		if (obj.hasOwnProperty(char)) {
			//untuk mengecek apakah char ada dalam objek? jika ada, nilai obj bertambah

			obj[char]++;
		} else {
			obj[char] = 1;
		}
	}

	const sortedKeys = Object.keys(obj).sort((a, b) => {
		//mengambil semua obj dengan object.keys dan menurutkan (.sort) dengan beberapa kodisi

		if (a.toUpperCase() === b.toUpperCase()) {
			if (a < b) {
				return -1;
			} else if (a > b) {
				return 1;
			}
			return 0;
		}
		return a.localeCompare(b, "en", { sensitivity: "case" });
	});

	const result = [];

	for (let i = 0; i < sortedKeys.length; i++) {
		// melooping huruf yang cocok pada input
		const key = sortedKeys[i];
		const entry = `"${key}": ${obj[key]}`;
		result.push(entry);
	}

	return `[${result.join(", ")}]`;
}

// const input = "Hello World";
// const input = "Bismillah";
const input = "MasyaAllah";
console.log(countAndSorts(input));
