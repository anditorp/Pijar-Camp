/*
Intro to JavaScript 2 - Soal No. 1
Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in
Functions) beserta contoh penggunaannya(kecuali : split, reverse,
join, foreach, filter)
 */


// 1. Push = Method push digunakan untuk menambah satu atau lebih data baru di ahir dari sebuah array.
console.log(`
1. Push`);
const myNumPush = [1, 2, 3]
myNumPush.push(4);  
console.log(myNumPush)

// 2. Pop = Method pop adalah kebalikan dari push. Method pop digunakan untuk menghapus item terakhir dari sebuah array.
console.log(`
2. Pop`);
const myNumPop = [1, 2, 3]
myNumPop.pop(1)
console.log(myNumPop)

// 3. Unshift = Kalau push digunakan untuk menambah item baru di ahir sebuah array, maka method unshift digunakan untuk menambah item baru di awal sebuah array.
console.log(`
3. Unshift`);
const myNumUnshift = [3, 4]
myNumUnshift.unshift(1, 2);
console.log(myNumUnshift)

// 4. Shift = Digunakan untuk menghapus item pertama dari sebuah array.
console.log(`
4. Shift`);
const myNumShift = [1, 2, 3]
myNumShift.shift();
console.log(myNumShift)

// 5. Includes = Method includes digunakan untuk mengecek apakah sebuah array memilik element tertentu.
console.log(`
5. Include`);
const numbers = [1, 2, 3, 4, 5];
const kondisiBenar = numbers.includes(3);
const KondisiSalah = numbers.includes(6);
console.log(kondisiBenar); 
console.log(KondisiSalah); 

// 6. indexOf = Method indexOf digunakan untuk mencari letak sebuah item dalam array.
console.log(`
6. indexOf`);
const fruits = ['apple', 'banana', 'cherry']
const apple = fruits.indexOf('apple')
const mango = fruits.indexOf('mango')
console.log(apple);
console.log(mango);

// 7. Concat = Method concat digunakan untuk menggabungkan 2 atau lebih array.
console.log(`
7. Concat`);
const array1 = [1, 2];
const array2 = [3, 4];
const combinedArray = array1.concat(array2);
console.log(combinedArray); // Output: [1, 2, 3, 4]

// 8. Slice = Method slice digunakan untuk memilih satu atau beberapa item dari sebuah array.
console.log(`
8. Slice`);
const fruitsSlice = ['apple', 'banana', 'cherry']
const slice = fruitsSlice.slice(0, 2)
console.log(slice);

// 9. Splice = Metode splice() bisa digunakan untuk menambahkan, menghapus, atau mereplace item ke atau dari sebuah array.
console.log(`
9. Splice`);
const fruitsSplice = ['apple', 'banana', 'cherry']
fruitsSplice.splice(0 , 2 , 'mango') 
// menghapus 1 item di index 0 dan menambah 'mango' di index 0
console.log(fruitsSplice) // ['mango', 'banana', 'cherry']

// 10. Sort = method sort digunakan untuk mengurutkan item dalam sebuah array.
console.log(`
10. Sort`);
const myNum = [11, 18, 100, 25, 30]
myNum.sort(function(a,b){return b - a}) // output ->[ 100, 11, 18, 25, 30 ]
console.log(myNum);


