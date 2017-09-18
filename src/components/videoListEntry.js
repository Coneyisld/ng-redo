angular.module('video-player')
.component('videoListEntry', {
  templateUrl: 'src/templates/videoListEntry.html',
   
  bindings: {
    video: '<',
    method: '<'
  },

  controller: function() {
    //this.video
    //this.onClick = () => this.selectedVideo = this.video[3];
  },
});
