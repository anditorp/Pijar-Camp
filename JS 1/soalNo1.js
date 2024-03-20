/*
Soal No.1 :
Buat variabel dengan nama biodata dan tipe data object dengan
value dan tipe data sebagai berikut:
● name (string)
● age(number)
● hobbies (array)
● IsMaried (boolean)
● schoolList (Array of Object) with key name, yearIn, yearOut,
and major (if any, if no set “null” )
● skills (Array of Object) with key skillName and level (beginner,
advanced, expert)
● interestInCoding (Boolean)
*/
const biodata = {
    name : 'Andito',
    age : 21,
    hobbies : ('Bermain game', 'Sepak Bola', 'memelihara hewan'),
    isMaried : false,
    schoolList : [
    {
        name : 'MI.TARBIYATUL FALLAH',
        yearIn : 2008,
        yearOut : 2014,
        major : null,
    },
    {
        name: 'SMPN 34 KOTA BEKASI',
        yearIn: 2014,
        yearOut: 2017,
        major: null,
    },
    {
        name: "SMA PLUS ASTHA HANNAS",
        yearIn: 2017,
        yearOut: 2020,
        major: 'MIPA',
    },
    {
        name : "INSTITUT TEKNOLOGI TELKOM PURWOKERTO",
        yearIn : 2020,
        yearOut : 2024,
        major : 'Teknik Elektro',
    },
    ],
    skills : [
    {
        skillName: 'PLC',
        level : 'beginner',
    },
    {
        skillName: 'Arduino',
        level : 'beginner',
    },
    {
        skillName: 'Programming',
        level : 'beginner',
    }
    ],
    interestInCoding : true
}

