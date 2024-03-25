/*
Soal No. 3
Buatlah program menggunakan method fetch untuk
menampilkan semua name (hanya name nya saja) dari REST API
dibawah ini
https://jsonplaceholder.typicode.com/users
*/
async function fetchUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
  
      // Mengambil hanya name dari setiap objek dalam array
      const names = data.map(user => user.name);
      console.log(names);

    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    }
  }
  
  fetchUsers();
  