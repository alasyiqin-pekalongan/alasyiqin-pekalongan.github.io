let isPlaying = false;
      let audio = document.getElementById('audioPlayer');

      function playPause() {
        if (isPlaying) {
          audio.pause();
        } else {
          audio.play();
        }
        isPlaying = !isPlaying;
      }

      function stop() {
        audio.pause();
        audio.currentTime = 0;
        isPlaying = false;
      }

      function changeAudio() {
        const audioSelect = document.getElementById('audioSelect');
        const selectedAudio = audioSelect.value;
        audio.src = selectedAudio;
        stop(); // Stop the current audio when changing to a new one
      }