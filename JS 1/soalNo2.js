/*
Soal No.2 :
Buat program yang menghitung rata-rata UN beserta gradenya,
dengan mengisi 4 nilai yakni Bahasa indonesia, Bahasa Inggris
Matematika dan IPA, yang di dalam program tersebut memiliki
validasi yaitu semua nilai tersebut harus diisi, dan juga untuk
grade memiliki kondisi dengan ketentuan sebagai berikut:
90 - 100 = A
80 - 89 = B
70 - 79 = C
60 - 69 = D
0 - 59 = E 
*/
const mtk = 70;
const bahasaIndonesia = 87;
const bahasaInggris = 85;
const ipa = 65;

// Validasi nilai menggunakan truthy dan falsy
if (!mtk || !bahasaIndonesia || !bahasaInggris || !ipa) {
  console.log('Semua nilai harus terisi');
} else {
  const average = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
  let grade;

  if (average > 90) {
    grade = 'A';
  } else if (average > 80) {
    grade = 'B';
  } else if (average > 70) {
    grade = 'C';
  } else if (average > 60) {
    grade = 'D';
  } else {
    grade = 'E';
  }

  console.log('Rata-rata = ', average);
  console.log('Grade = ', grade);
}