import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  video_urls = [
      'http://www.streambox.fr/playlists/test_001/stream.m3u8',
      '//bitmovin-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8'
  ];

  video : string;

  ngOnInit(){

  }

  changeVideo(url : string) {
      this.video = url;
  }

}
