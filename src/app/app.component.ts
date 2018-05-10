import { Component, OnInit } from '@angular/core';

var bitmovin = require('bitmovin-player');

var conf = {
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  ngOnInit(){

        let video_urls = [
            'http://www.streambox.fr/playlists/test_001/stream.m3u8',
            '//bitmovin-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8'
        ];

        conf.source.hls = video_urls[1];

        var player = bitmovin('player');

        player.setup(conf).then(() => {

            player.play();

        });
  }

}
