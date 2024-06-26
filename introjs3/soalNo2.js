/*
Soal No. 2
Buat program menggunakan callback function untuk melanjutkan
dan menampilkan semua bulan menggunakan method map
*/

const getMonth = (callback) =>{
    setTimeout(() => {
        let error = false
        let month = ["January", "February", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
        if (!error) {
            callback(null, month)
        }
        else {
            callback(new Error("Sorry Data Not Found"), [])
        }
    }, 4000);
}

const displayMonths = (error, months) => {
    if (error) {
        console.log(error.message);
    } else {
        const monthAbbreviations = months.map((month, index) => `${month.substr(0, 3)}. (${index + 1})`);
        console.log(monthAbbreviations);
    }
}

getMonth(displayMonths);
