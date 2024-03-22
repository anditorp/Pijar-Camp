/* 
Intro to JavaScript - Tugas No. 3
Buatlah fungsi yang memiliki parameter nilaiAwal (number) dan
nilaiAkhir (number), serta dataArray (array).
Fungsi tersebut memiliki validasi nilaiAwal < nilaiAkhir dan
jumlah data dalam dataArray harus lebih dari 5.
Fungsi tersebut akan mencari data didalam dataArray yang
memiliki nilai diantara nilaiAwal dan nilaiAkhir, mengurutkan
hasil pencarian dan menampilkannya ke layar/console.
Contoh :
SeleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])
Output:
[8, 14, 17]
SeleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])
Output:
“Nilai akhir harus lebih besar dari nilai awal”
SeleksiNilai(5, 17 , [2, 25, 4])
Output:
“Jumlah angka dalam dataArray harus lebih dari 5”
SeleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18])
Output:
“Nilai tidak ditemukan”
*/

function SeleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    // Validasi nilaiAwal < nilaiAkhir
    if (nilaiAwal >= nilaiAkhir) {
        console.log("Nilai akhir harus lebih besar dari nilai awal");
        return;
    }

    // Validasi jumlah data dalam dataArray harus lebih dari 5
    if (dataArray.length <= 5) {
        console.log("Jumlah angka dalam dataArray harus lebih dari 5");
        return;
    }

    // Mencari data dalam dataArray yang berada di antara nilaiAwal dan nilaiAkhir
    const hasilSeleksi = dataArray.filter(data => data > nilaiAwal && data < nilaiAkhir);

    // Jika hasilSeleksi kosong, berikan pesan bahwa nilai tidak ditemukan
    if (hasilSeleksi.length === 0) {
        console.log("Nilai tidak ditemukan");
        return;
    }

    // Mengurutkan hasil seleksi
    hasilSeleksi.sort((a, b) => a - b);

    // Menampilkan hasil seleksi
    console.log(hasilSeleksi);
}

// Contoh penggunaan:
console.log(SeleksiNilai(2, 7, [3, 35, 6, 13, 14, 20, 10])); // Output: [3, 6]
console.log(SeleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8])); // Output: "Nilai akhir harus lebih besar dari nilai awal"
console.log(SeleksiNilai(5, 17, [2, 25, 4])); // Output: "Jumlah angka dalam dataArray harus lebih dari 5"
console.log(SeleksiNilai(5, 17, [2, 25, 4, 1, 30, 18])); // Output: "Nilai tidak ditemukan"
