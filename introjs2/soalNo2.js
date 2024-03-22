/*
Intro to JavaScript - Soal No.2
Buatlah program searching nama yang dapat dibatasi jumlah
outputnya yang menerapkan callback function dengan data
sebagai berikut:
const name = [
"Abigail", "Alexandra", "Alison",
"Amanda", "Angela", "Bella",
"Carol", "Caroline", "Carolyn",
"Deirdre", "Diana", "Elizabeth",
"Ella", "Faith", "Olivia", "Penelope"]
Contoh:
searchName(“an”, 3, callback)


Output:
[“Alexandra”,”Amanda”,”Angela”]
*/

const names = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
];

function searchName(keyword, limit, callback) {
    const filteredNames = names.filter(names => names.toLowerCase().includes(keyword.toLowerCase())).slice(0, limit);
    callback(filteredNames);
}

function displayNames(filteredNames) {
    console.log(filteredNames);
}

// Contoh penggunaan
searchName("an", 4 , displayNames);
