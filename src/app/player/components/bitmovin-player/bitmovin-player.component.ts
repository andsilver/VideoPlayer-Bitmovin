import { Component, OnInit, Input, OnChanges } from '@angular/core';

var bitmovin = require('bitmovin-player');

@Component({
  selector: 'app-bitmovin-player',
  templateUrl: './bitmovin-player.component.html',
  styleUrls: ['./bitmovin-player.component.scss']
})
export class BitmovinPlayerComponent implements OnChanges {

  conf = {
      key: "d14ec700-948a-4355-8764-295da397425c",
      source: {
          dash: "//bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd",
          hls : '',
          progressive: "//bitmovin-a.akamaihd.net/content/MI201109210084_1/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4",
          poster: "//bitmovin-a.akamaihd.net/content/MI201109210084_1/poster.jpg"
      },
      location : {
          ui : "//bitmovin-a.akamaihd.net/bitmovin-player/stable/7/bitmovinplayer-ui.js",
          ui_css: '//bitmovin-a.akamaihd.net/bitmovin-player/stable/7/bitmovinplayer-ui.css'
      }
  };

  @Input()
  src : string;

  player : any;

  isSetup : boolean = false;

  constructor() { }

  ngOnChanges() {

      if(!this.src)
        return;

      if(this.isSetup)
        this.player.load({ hls: this.src});
      else{
          this.conf.source.hls = this.src;
          this.setupPlayer();
      }
  }

  setupPlayer(){
      setTimeout( () => {
          this.player = bitmovin('player');
          this.player.setup(this.conf).then(() => {
              this.player.play();
              this.isSetup = true;
          });

      }, 500);
  }
}
