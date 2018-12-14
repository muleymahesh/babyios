import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/*
  Generated class for the RecentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RecentProvider {
  private HISTORY_KEY: string = 'history';
  
    history: any[] = [];
    _readyPromise: Promise<any>;
  
  constructor(public http: HttpClient,public storage: Storage) {
   this.load();
    console.log('Hello RecentProvider Provider');
  }

  load() {
    
      return this.storage.get(this.HISTORY_KEY).then((val) => {
        if (val && val.length > 0) {
          this.history= val;
          return this.history;
        } else {
          this.save();
        }
      });
    }
    post(product1: any, no_of_time = 1){
      console.log(product1);
      this.tohistory(product1, no_of_time);
    }
    tohistory(product1: any, qty: number){
      
        let exist = false;
        for(let i in this.history){
         
           if(this.history[i].p_id == product1[0].p_id){
              this.history[i].no_of_time += qty;
              exist = true;
              console.log("recent",product1);
             // console.log(this.cart);
              break;
          }
        }
     
        if(!exist){
          product1[0].no_of_time = qty;
        //  console.log("recent",product1.imgs[0].img_url);
          console.log("recent exist",product1[0].imgs[0]);
          this.add(product1);
          console.log("recent",product1);
        }
    
        this.save();
      }
      add(product1: any){
        console.log("recent add",product1[0].imgs[0]);
        let tmp = {
          no_of_time: product1[0].no_of_time,
          name: product1[0].product_name,
          images: product1[0].imgs[0].img_url,
          p_id: product1[0].p_id,
          price: product1[0].mrp,
          discount:product1[0].per_discount,
         // regular_price: product1.regular_price,
          on_sale: product1[0].offer_name,
          in_stock: product1[0].status,
          // attributes: product.attributes,
          // variation_id: product.variation_id
        }
    
        this.history.push(tmp);
       
        return this.save();
        
      }

  get totalQty(){
    return this.history.length;
  }
  save(){
    return this.storage.set(this.HISTORY_KEY,this.history);
  }

  reset(){
    this.history = [];
    return this.storage.remove(this.HISTORY_KEY).then(() => {});
  }

  get all() {
    return this.history;
  }





}
