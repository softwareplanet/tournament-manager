import { Component, Input } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-facebook-share',
  templateUrl: './facebook-share.component.html',
  styleUrls: ['./facebook-share.component.css']
})
export class FacebookShareComponent {

  @Input() url: string;
  @Input() title: string;
  @Input() description: string;
  @Input() imageUrl: string;

  constructor(private fb: FacebookService) {

    const initParams: InitParams = {
      appId: '150159422250915',
      xfbml: true,
      version: 'v2.10',
    };

    this.fb.init(initParams);
  }

  share() {
    const shareOptions = {
      method: 'share_open_graph',
      action_type: 'og.shares',
      action_properties: JSON.stringify({
        object: {
          'og:url': this.url,
          'og:title': this.title,
          'og:description': this.description,
          'og:image': this.imageUrl
        }
      })
    };

    this.fb.ui(shareOptions);
  }
}
