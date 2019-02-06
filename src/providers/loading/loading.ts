import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class LoadingProvider {
  load: any;
isloading=false;
  constructor(private loader: LoadingController, private translate: TranslateService) {}

  present() {
    this.translate.get(['WAIT']).subscribe( x=> {
      this.load = this.loader.create({
        spinner: 'dots'
      });
    });

    this.load.present();
    this.isloading=true; 
  }

  dismiss(){
    this.load.dismiss();
    this.isloading=false; 
  }

  isShowing(){
    return this.isloading;
  }
}
