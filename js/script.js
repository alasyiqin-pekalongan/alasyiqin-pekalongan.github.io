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

const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const volumeControl = document.getElementById('volumeControl');

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    audio.pause();
    playPauseBtn.textContent = 'Play';
  }
}

function changeVolume() {
  audio.volume = volumeControl.value / 100;
}