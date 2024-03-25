/*
Soal No. 3
Buatlah Code untuk soal dibawah ini:
Diberikan sebuah variabel yang berisikan bilangan integer
dengan ketentuan angka 0 (nol) dalam variabel tersebut
merupakan pemisah antara satu bilangan dengan bilangan
lainnya. Bilangan-bilangan tersebut akan dipisah dan diurutkan
berdasarkan angka di bilangan-bilangan itu sendiri. Setelah itu,
bilangan hasil pengurutan akan digabung kembali dengan tanpa
pemisah dengan output berupa bilangan integer. Buatlah
method/function yang menerima parameter hanya deret angka
dan menghasilkan output seperti keterangan di atas.
*/
function sortAndMergeNumbers(numbers) {
    const separatedNumbers = numbers.toString().split('0');
    const mergedNumber = separatedNumbers
    .map(number => [...number].sort().join(''))
    .sort((a, b) => a - b)
    .join('');

    return parseInt(mergedNumber); }


const result = sortAndMergeNumbers(5956560159466056);
console.log(result);
