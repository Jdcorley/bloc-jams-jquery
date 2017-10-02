$( document ) .ready(function() {
  $('button#play-pause').click( function() {
    player.playPause();
    $(this).attr('playState', player.playState);
  });
  $('button#next').click( function() {
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= album.length) { return; }
    const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);
  });
  $('button#previous').click( function() {
    if(player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const previousSongIndex = currentSongIndex - 1;
    if (previousSongIndex >= 0) { return; };
    const previousSong = album.songs[previousSongIndex];
    player.playPause(previousSong);
  });
  $('#time-control input').on('input', function (event){
    player.skipTo(event.target.value);
  });
  $('#volume-control input').on('input', function (event){
    player.setVolume(event.target.value);
   });
  setInterval ( () => {

    const currentTime = player.getTime();
    const duration = player.getDuration();
    const minutesDuration = Math.floor(duration / 60);
    const secondsDuration = Math.round(duration % 60);
    const prettyDuration = minutesDuration+":"+secondsDuration;
    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.round(currentTime % 60);
    const prettyTime = minutes+":"+seconds;
    const percent = (currentTime / duration) * 100;
    $('#time-control .total-time').text(prettyDuration);
    $('#time-control .current-time').text( prettyTime );
    $('#time-control input').val(percent);
  }, 1000);
});
