import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const keyForStorge = 'videoplayer-current-time';

const onPlay = function (data) {
  localStorage.setItem(keyForStorge, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = localStorage.getItem(keyForStorge);
player
  .setCurrentTime(currentTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
