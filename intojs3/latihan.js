function getPost(method, url) {
    return new Promise((resolve, reject) => {
      const ajax = new XMLHttpRequest();
      ajax.open(method, url);
      ajax.send();
      ajax.onload = function () {
        if (ajax.status === 200) {
          const hasil = JSON.parse(ajax.responseText);
          resolve(hasil);
        } else {
          reject('Ada error bro...');
        }
      }
    });
  }
  
  getPost('GET', 'https://jsonplaceholder.typicode.com/posts')
    .then(result => {
      result.forEach(post => {
        console.log(post.title);
      });
    })
    .catch(error => {
      console.log(error);
    });
  