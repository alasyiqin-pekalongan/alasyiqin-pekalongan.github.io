// document.getElementById('learnMoreBtn').addEventListener('click', function() {
//     // Ganti URL dengan URL halaman "About" Anda
//     window.location.href = '/index.html';
// });

// function searchContent() {
//             // Ambil nilai pencarian
//             var searchTerm = document.getElementById('search').value.toLowerCase();

//             // Cek apakah pencarian adalah "faya ayyuharroju"
//             if (searchTerm === 'faya ayyuharroju') {
//                 // Tampilkan konten yang dicari
//                 document.getElementById('faya_ayyuharroju').classList.add('show');
//             } else {
//                 // Sembunyikan konten jika pencarian tidak cocok
//                 document.getElementById('faya_ayyuharroju').classList.remove('show');
//             }
//         }


function playPause() {
    var audio = document.getElementById("audioPlayer");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
  
  function stop() {
    var audio = document.getElementById("audioPlayer");
    audio.pause();
    audio.currentTime = 0;
  }
  