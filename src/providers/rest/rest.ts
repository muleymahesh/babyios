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
url1="http://babyneeds.co.in/babyneeds/send_invoice.php?o_id=";
 // url="http://makslab.com/babyneeds/ws/v2/api1.php";
 url="http://babyneeds.co.in/babyneeds/ws/v2/api1.php";
mydata:any;
  constructor(public http: HttpClient) {
   
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
  getproducts(data)
  {
    return this.http.post(this.url, JSON.stringify(data))
    .toPromise()
    .then((data: any) => {
      if(data.data)
      {
    
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


  register(data) {
  //  console.log("request sending");
    return this.http.post(this.url, JSON.stringify(data))
    .toPromise()
    .then((data: any) => {
    //   console.log('Success', data.data);
       return data;
    })
    .catch(err => {
      // console.log('Error', err);
       return err;
    })
  }

  getWishlist(data) {
   // console.log("request sending");
    return this.http.post(this.url, JSON.stringify(data))
    .toPromise()
    .then((data: any) => {
//console.log(data);
      if(data.result=="failed")
      {
       return data;
      }
      else{
  //     console.log('Success', data);
       return data;
      }
    })
    .catch(err => {
    //   console.log('Error', err);
       return err;
    })
  
   
  }

  getBanner(data) {
   // console.log("request sending");
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
   // console.log("request sending");
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
   // console.log("request sending");
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
   // console.log("request sending");
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
   // console.log("request sending");
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
   // console.log("request sending");
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
   //    console.log('Success', data.data);
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
     //  console.log('Error', err);
       return err;
    })
  }


  getNewArrivalList(data) {
   // console.log("request sending");
    return this.http.post(this.url, JSON.stringify(data))
     .toPromise()
     .then((data: any) => {
     //   console.log('Success', data.data);
        return data;
     })
     .catch(err => {
       // console.log('Error', err);
        return err;
     })
   }

   getMyOrder(data) {
   // console.log("request sending");
    return this.http.post(this.url, JSON.stringify(data))
    .toPromise()
    .then((data: any) => {
      
     //  console.log('Success', data);
       return data;
    })
    .catch(err => {
     //  console.log('Error', err);
       return err;
    })
  
    
   
  }
  changePassword(data)
  {
    //console.log("request sending");
    return this.http.post(this.url, JSON.stringify(data))
    .toPromise()
    .then((data: any) => {
      // console.log('Success', data);
       return data;
    })
    .catch(err => {
      // console.log('Error', err);
       return err;
    })
  
  }

  orderOperation(data)
  {
    
 //   console.log("request sending");
    return this.http.post(this.url, JSON.stringify(data))
    .toPromise()
    .then((data: any) => {
   //    console.log('Success', data);
       return data;
    })
    .catch(err => {
     //  console.log('Error', err);
       return err;
    })
  
  }

  
  favOperation(data)
  {
   // console.log("request sending");
    return this.http.post(this.url, JSON.stringify(data))
    .toPromise()
    .then((data: any) => {
     //  console.log('Success', data);
       return data;
    })
    .catch(err => {
      // console.log('Error', err);
       return err;
    })
  
  }

reviweOperation(data)
{
 // console.log("request sending");
  return this.http.post(this.url, JSON.stringify(data))
  .toPromise()
  .then((data: any) => {
   //  console.log('Success', data);
     return data;
  })
  .catch(err => {
     //console.log('Error', err);
     return err;
  })


}

serviceOperations(data) {
  //console.log("request sending");
  return this.http.post(this.url, JSON.stringify(data))
   .toPromise()
   .then((data: any) => {
    if(data.data)
    {
    // console.log('Success', data.data);
     return data.data;
    }
    else if(data.result=='failed')
    {
      // console.log("services not present");
     return data;
    }
    else
    {
      return data;
    }
   })
   .catch(err => {
     // console.log('Error', err);
      return err;
   })
 }

 Inovice(data) {
   console.log("http://babyneeds.co.in/babyneeds/send_invoice.php?o_id="+data);
return this.http.post("http://babyneeds.co.in/babyneeds/send_invoice.php?o_id="+data,[])
 .toPromise()
 .then((data:any)=>{
console.log(data);
return data;
 })
 }

 feedbackOperation(data)
 {
   //console.log("request sending");
   return this.http.post(this.url, JSON.stringify(data))
   .toPromise()
   .then((data: any) => {
     // console.log('Success', data);
      return data;
   })
   .catch(err => {
     // console.log('Error', err);
      return err;
   })
 
  }

 placeOrderOperation(data)
 {
   //console.log("request sending");
   return this.http.post(this.url, JSON.stringify(data))
   .toPromise()
   .then((data: any) => {
     // console.log('Success', data);
      return data;
   })
   .catch(err => {
     // console.log('Error', err);
      return err;
   })
 
 
 }

 updateOrderDetail(data)
 {
  // console.log("request sending");
   return this.http.post(this.url, JSON.stringify(data))
   .toPromise()
   .then((data: any) => {
   
      return data;
   })
   .catch(err => {
    //  console.log('Error', err);
      return err;
   })
 
 
 }
 getTimeslot(data)
 {
 // console.log("request sending");
  return this.http.post(this.url, JSON.stringify(data))
  .toPromise()
  .then((data: any) => {
  
     return data;
  })
  .catch(err => {
   //  console.log('Error', err);
     return err;
  })

 }





}

