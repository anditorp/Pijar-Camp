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
    if (nilaiAwal >= nilaiAkhir) {
        return "Nilai akhir harus lebih besar dari nilai awal";
    }

    if (dataArray.length <= 5) {
        return "Jumlah angka dalam dataArray harus lebih dari 5";
    }

    let hasilSeleksi = [];

    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i] > nilaiAwal && dataArray[i] < nilaiAkhir) {
            hasilSeleksi.push(dataArray[i]);
        }
    }

    if (hasilSeleksi.length === 0) {
        return "Nilai tidak ditemukan";
    }

    hasilSeleksi.sort((a, b) => a - b);
    return hasilSeleksi;
}


console.log(SeleksiNilai(2, 7, [3, 35, 6, 13, 14, 20, 10])); 


