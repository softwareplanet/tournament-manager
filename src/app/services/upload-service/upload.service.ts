import { Injectable } from '@angular/core';
import { Downgrade } from '../../hybrid/downgrade';

declare let firebase: any;
const ref = 'upload-files/';
@Downgrade()
@Injectable()
export class UploadService {
  private storage: any;

  constructor() {
    this.storage = firebase.storage();
  }

  uploadFile(file): Promise<any> {
    return this.storage.ref(this.createRef(file)).put(file)
      .then((res) => {
        return res.metadata.downloadURLs[0];
      });
  }

  private createRef(file) {
    let date =  new Date;
    return ref + date.toString().replace(/ /g, '_') + file.name;
  }

}

