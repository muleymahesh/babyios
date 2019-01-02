import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


/*
  Generated class for the RateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RateProvider {
  private RATE_KEY: string = 'rate';
  
    rate:any=0;
    _readyPromise: Promise<any>;
  constructor(public http: HttpClient,public storage: Storage) {
    this.load();
    console.log('Hello RateProvider Provider');
  }

  load() {
    
      return this.storage.get(this.RATE_KEY).then((val) => {
        if (val && val.length > 0) {
          this.rate= val;
          this.save(this.rate)
          return this.rate;
         // this.save(this.rate)
        } 
      });
    }
    post(no_of_time = 1){
      this.tohistory(no_of_time);
    }

    tohistory(qty: number){
    
      
      console.log(this.rate);
         
           if(this.rate>0){
              this.rate=this.rate + qty;
              console.log(this.rate);
            //  this.save();
             }
        else
        {
          console.log(this.rate);
          this.add(qty)
         
        }
        
       
      }

      add(qty: any){
       // console.log("recent add",product1[0].imgs[0]);
        
          // attributes: product.attributes,
          console.log(this.rate);
          // variation_id: product.variation_id
        this.rate=qty;
    
        console.log(this.rate);
       
      //  return this.save();
        
      }

      save(int){
        console.log("save",this.rate);
        return this.storage.set(this.RATE_KEY,int);
      }
    
      reset(){
        this.rate =0;
        return this.storage.remove(this.RATE_KEY).then(() => {});
      }
    
    get all() {
      return this.rate; 
    }



    }
