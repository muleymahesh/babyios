import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class HistoryProvider {
  private HISTORY_KEY: string = 'history';

  history1: any;
  _readyPromise: Promise<any>;

  constructor(public storage: Storage) {
    this.load();
  }

  load() {
    return this.storage.get(this.HISTORY_KEY).then((val) => {
      if (val) {
        this.history1 = val;
        return this.history1;
      } else {
        this.save();
      }
    });
  }

  post(product: any){
    let exist = false;
    for(let i in this.history1){
      if(this.history1[i].p_id == product.p_id){
        exist = true;
        break;
      }
    }
    if(!exist)
      this.history1.push(product);

    return this.save();
  }

  get clear(){
    this.history1 = [];
    return this.save();
  }

  save(){
    return this.storage.set(this.HISTORY_KEY, this.history1);
  }

  get all() {
    return this.history1;
  }
}
