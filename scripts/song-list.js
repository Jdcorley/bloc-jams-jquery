$( document ) .ready(function(){
  album.songs.forEach((song, index) => {
    song.element = $(`
      <tr>
        <td>
          <button>
            <span class="song-number">${index + 1}</span>
            <span class="ion-play"></span>
            <span class="ion-pause"></span>
          </button>
        </td>
        <td>${song.title}</td>
        <td>${formater(song.duration)}</td>
      </tr>
      `);

      song.element.click( event => {
        player.playPause(song);
        $('button#play-pause').attr('playState', player.playState);
      });

    $('#song-list').append(song.element);
  });
});
function formater(duration){
  var minutesDuration = Math.floor(duration / 60);
  var secondsDuration = Math.round(duration % 60);
  var prettyDuration = minutesDuration+":"+secondsDuration;
  return prettyDuration;
}
