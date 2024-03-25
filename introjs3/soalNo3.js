/*
Soal No. 3
Buatlah 2 program bebas dengan menggunakan promise seperti
soal nomor 1
*/

// <--- Start Search Name --->
const names = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
];

const searchName = (keyword, limit)=> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const filteredNames = names.filter(names => names.toLowerCase().includes(keyword.toLowerCase())).slice(0, limit);
            if (filteredNames.length > 0){
                resolve(filteredNames);
            } else {
                resolve(new Error(`Tidak ada nama yang cocok dengan keyword "${keyword}"`));
            }
        }, 3000);
    })

}

function displayNames(filteredNames) {
    console.log(filteredNames);
}

searchName("an", 4)
    .then(displayNames)
    .catch(error => {
        console.error(error.message);
    });

// <--- End Of Search Name --->

// Fungsi untuk memeriksa apakah sebuah angka genap atau ganjil
const checkEvenOrOdd = (number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof number !== 'number'){
                reject('Input harus berupa angka');
            } else if (number % 2 === 0) {
                resolve(`${number} adalah angka genap`);
            } else  {
                reject(`${number} adalah angka ganjil`);
            }
        }, 4000);
    });
};


checkEvenOrOdd()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });