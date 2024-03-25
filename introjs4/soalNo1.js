/*
Soal No. 1
Buat code dari tugas Computer Science dibawah ini
Deteksi Palindrom
Diberikan sebuah teks, periksa apakah kata tersebut adalah palindrom atau
tidak. Misalnya teks “Malam”, output = palindrom.
Reverse Words
Diberikan sebuah kalimat, ubah urutan kata-kata di dalam kalimat menjadi
terbalik. Misalnya kalimat “Saya belajar Javascript”, output “Javascript
belajar Saya”
*/

// <--- Start palindrome--->

function isPalindrome(text) {
    // Menghilangkan spasi dan mengubah teks menjadi huruf kecil
    const lowerCaseText = text.toLowerCase();
    // Membalikkan teks
    const reversedText = lowerCaseText.split('').reverse().join('');
    
    // Memeriksa apakah teks asli sama dengan teks yang dibalik
    if (lowerCaseText === reversedText) {
    return 'Text is a palindrome';
    } else {
    return 'Text is not a palindrome';
    }
}
console.log(isPalindrome('Malam')); // Output: palindrom

// <--- End of palindrome --->

// <--- Start reverse words --->

function reverseWords(sentence) {
    // Memisahkan kata-kata dalam kalimat
    const words = sentence.split(' ');
    // Membalikkan urutan kata-kata
    const reversedSentence = words.reverse().join(' ');
    
    return reversedSentence;
}
  console.log(reverseWords('Saya belajar Javascript')); // Output: "Javascript belajar Saya"

  // <--- End of reverse words --->
