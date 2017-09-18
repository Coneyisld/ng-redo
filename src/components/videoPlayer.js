angular.module('video-player')

.component('videoPlayer', {
  templateUrl: 'src/templates/videoPlayer.html',

  bindings: {
    selectedVideo: '<'
  },

  controller: function($window) {
    this.videoUrl = () => `https://www.youtube.com/embed/${this.selectedVideo.id.videoId}`;
    this.onClick = () => console.log('clikced')
  },
  
});
