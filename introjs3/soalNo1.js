/*
Soal No. 1
Buatlah sambungan program menggunakan then catch dan juga
try catch untuk mengecek hari kerja dari kode Asynchronous
dibawah dan jelaskan penggunaan then catch dan try catch
dengan memberikan komentar di bawahnya:
*/

const cekHariKerja =(day) =>{
    return new Promise ( (resolve, reject)=>{
        setTimeout( ()=>{
            const dataDay = [ 'senin', 'selasa', 'rabu', 'kamis', 'jumat'];
            let cek = dataDay.find ((item)=>{
                return item === day;
            })
            if (cek) {
                resolve (cek);
            }
            else{
                reject(new Error ('hari ini bukan hari kerja'));
            }
        }, 3000);
    });
}


//      <-- Start then catch -->

cekHariKerja('senin')
.then((response)=>{
    console.log('Hari ' ,response, 'adalah hari kerja (then)');
}) //Jika Promise diresolve, maka akan dieksekusi blok kode berikutnya di then dengan parameter 'response' berisi nilai yang diresolve.
.catch((error)=>{
    console.error('Error: ',error.message, '(catch)');
}); //Jika Promise direject, maka akan dieksekusi blok kode berikutnya di catch dengan parameter 'error' berisi objek Error yang direject.

//      <-- End then catch -->

//      <-- Start try catch -->

try {
    const result = cekHariKerja('senin')
    console.log('Hari ini adalah hari kerja (try)');
} catch (error) {
    console.error(console.error('Error: ', error.message, '(catch)'));
}
 
//      <-- End try catch -->
