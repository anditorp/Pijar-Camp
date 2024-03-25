/*
Soal No. 2
Demy membeli makanan menggunakan aplikasi PijarFood.
Dimana terdapat 2 buah kode promo:
- Promo ‘PIJARFOOD5’ dengan ketentuan pemesanan minimal
50rb akan mendapat diskon 50%, dengan maksimal
potongan sebesar 50rb.
- Promo ‘DITRAKTIRPIJAR’ dengan ketentuan pemesanan
minimal 25rb akan mendapatkan diskon 60%, dengan
maksimal potongan sebesar 30rb.
- Jika tidak menggunakan kode promo ‘false’

Untuk pengiriman sejauh 2km pertama akan dikenakan tarif 5rb,
dan setiap satu kilometer selanjutnya dikenakan penambahan
3rb. Untuk beberapa restoran dikenakan pajak yakni 5% dari
harga makanan yang dipesan (true), jika tidak dikenakan pajak
(false).
*/

function PijarFood(price, voucher, distance, tax) {
    let discount = 0;
    let deliveryCost = 0;
    let taxAmount = 0;
  
    if (voucher === 'PIJARFOOD5' && price >= 50000) {
      discount = Math.min(price * 0.5, 50000);
    } else if (voucher === 'DITRAKTIRPIJAR' && price >= 25000) {
      discount = Math.min(price * 0.6, 30000);
    }

    deliveryCost = 5000 + Math.max(0, (distance - 2) * 3000);

    if (tax) {
      taxAmount = price * 0.05;
    }

    const subtotal = price - discount + deliveryCost + taxAmount;

    // Displaying the result
    console.log("Price :", price);
    console.log("Discount :", discount);
    console.log("Delivery Cost :", deliveryCost);
    console.log("Tax :", taxAmount);
    console.log("SubTotal :", subtotal);
  }

  // Example usage
  PijarFood(75000, 'PIJARFOOD5', 5, true);
  