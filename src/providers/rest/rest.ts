import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()


export class RestProvider {

  url="http://babyneeds.co.in/babyneeds/ws/v2/api1.php";
mydata:any;
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }
  login(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url, JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


  register(data) {
    return this.http.post(this.url, JSON.stringify(data))
    .toPromise()
    .then((data: any) => {
       console.log('Success', data.data);
       return data.data;
    })
    .catch(err => {
       console.log('Error', err);
       return err;
    })
  }

  getWishlist(data) {
    return this.http.post(this.url, JSON.stringify(data))
    .toPromise()
    .then((data: any) => {
console.log(data);
      if(data.result=="failed")
      {
       return data;
      }
      else{
       console.log('Success', data);
       return data;
      }
    })
    .catch(err => {
       console.log('Error', err);
       return err;
    })
  
   
  }

  getBanner(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url, JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


  getRecommendations(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url, JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  // getNewArrivalList(data) {
  //   return new Promise((resolve, reject) => {
  //     this.http.post(this.url, JSON.stringify(data))
  //       .subscribe(res => {
  //        resolve(res);
  //       }, (err) => {
  //         reject(err);
  //       });
  //   });
  // }




  getBrands(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url, JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getOffers(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url, JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


  getAgeGroup(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url, JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


  
  getCategories(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url, JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
 

  getProduct(data) {
    return this.http.post(this.url, JSON.stringify(data))
    .toPromise()
    .then((data: any) => {
      if(data.data)
      {
       console.log('Success', data.data);
       return data.data;
      }
      else if(data.result=='failed')
      {
        // console.log('Success', data.data);
        return data.result;
      }
      else
      {
        return data;
      }
    })
    .catch(err => {
       console.log('Error', err);
       return err;
    })
  }


  getNewArrivalList(data) {
    return this.http.post(this.url, JSON.stringify(data))
     .toPromise()
     .then((data: any) => {
        console.log('Success', data.data);
        return data.data;
     })
     .catch(err => {
        console.log('Error', err);
        return err;
     })
   }

   getMyOrder(data) {
    return this.http.post(this.url, JSON.stringify(data))
    .toPromise()
    .then((data: any) => {
       console.log('Success', data.orders);
       return data.orders;
    })
    .catch(err => {
       console.log('Error', err);
       return err;
    })
  
    
   
  }
  changePassword(data)
  {
    return this.http.post(this.url, JSON.stringify(data))
    .toPromise()
    .then((data: any) => {
       console.log('Success', data.result);
       return data.result;
    })
    .catch(err => {
       console.log('Error', err);
       return err;
    })
  
  }



}

