const segitiga = 5;


if (typeof segitiga == 'number') {         
    for (let i = segitiga; i>=1; i--) {    
        let row = '';                           
        for (let j = 1; j<=i; j++) {            
            row += j+' ';                       
        }
        console.log(row);  
    }
} else {
    console.log('Data harus number');   
}