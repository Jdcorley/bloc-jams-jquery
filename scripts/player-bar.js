$( document ) .ready(function() {
  $('button#play-pause').click( function() {
    player.playPause();
    $(this).attr('playState', player.playState);
  });
  $('button#next').click( function() {

    var currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    var nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= album.songs.length) {
      nextSongIndex =  0;
     }
    var nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);
  });
  $('button#previous').click( function() {

    var currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    var previousSongIndex = currentSongIndex - 1;
    if (previousSongIndex < 0) {
      previousSongIndex = album.songs.length - 1;
    }
    var previousSong = album.songs[previousSongIndex];
    player.playPause(previousSong);
  });
  $('#time-control input').on('input', function (event){
    player.skipTo(event.target.value);
  });
  $('#volume-control input').on('input', function (event){
    player.setVolume(event.target.value);
   });
  setInterval ( () => {

    var currentTime = player.getTime();
    var duration = player.getDuration();
    var minutesDuration = Math.floor(duration / 60);
    var secondsDuration = Math.round(duration % 60);
    var prettyDuration = minutesDuration+":"+secondsDuration;
    var minutes = Math.floor(currentTime / 60);
    var seconds = Math.round(currentTime % 60);
    var prettyTime = minutes+":"+seconds;
    var percent = (currentTime / duration) * 100;
    $('#time-control .total-time').text(prettyDuration);
    $('#time-control .current-time').text( prettyTime );
    $('#time-control input').val(percent);
  }, 1000);
});
