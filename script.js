
// JavaScript untuk menampilkan menu hamburger
const hamburger = document.getElementById('hamburger-icon'); 
const navbar = document.getElementById('navbar'); 

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active'); 
});


/* Menangani pengiriman form
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();  // Menghentikan refresh halaman saat submit

  // Mengambil data dari form
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validasi form
  if (name && email && message) {
      // Menampilkan pesan sukses
      document.getElementById('response-message').innerText = 'Pesan Anda telah terkirim! Terima kasih atas tanggapan Anda.';
      document.getElementById('response-message').style.color = 'green';

      // Reset form setelah pengiriman
      document.getElementById('contact-form').reset();
  } else {
      // Menampilkan pesan kesalahan
      document.getElementById('response-message').innerText = 'Harap lengkapi semua kolom!';
      document.getElementById('response-message').style.color = 'red';
  }
});
*/