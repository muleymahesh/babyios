import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class CartProvider {
  private CART_KEY: string = 'cart';

  cart: any[] = [];
  _readyPromise: Promise<any>;
    total1:any;
  result:any;
 

  finalprice:any;
  j:any;
  constructor(public storage: Storage) {
    this.load();
  }

  load() {
  
    return this.storage.get(this.CART_KEY).then((val) => {
      if (val && val.length > 0) {
        this.cart = val;
        return this.cart;
      } else {
        this.save();
      }
    });
  }

  post(product1: any, qty: number = 1){
    
    this.toCart(product1, qty);
  }

  toCart(product1: any, qty: number){
  
    let exist = false;
    for(let i in this.cart){
     
       if(this.cart[i].p_id == product1.p_id){
          this.cart[i].quantity += qty;
          exist = true;
          console.log(this.cart);
          break;
      }
    }
 
    if(!exist){
      product1.quantity = qty;
      this.add(product1);
    }

    this.save();
  }

  add(product1: any){
    let tmp = {
      quantity: product1.quantity,
      name: product1.product_name,
      images: product1.imgs[0].img_url,
      p_id: product1.p_id,
      price: product1.mrp,
      discount:product1.per_discount,
     // regular_price: product1.regular_price,
      on_sale: product1.offer_name,
      in_stock: product1.status,
      // attributes: product.attributes,
      // variation_id: product.variation_id
    }

    this.cart.push(tmp);
   
    return this.save();
    
  }

  remove(product: any){
    for(let i in this.cart){
      if(product.variation_id){
        if(this.cart[i].id == product.id && this.cart[i].variation_id == product.variation_id){
          this.cart.splice(parseInt(i), 1);
          break;
        }
      }else{
        if(this.cart[i].p_id == product.p_id){
          this.cart.splice(parseInt(i), 1);
          break;
        }
      }
    }
    return this.save();
  }

  get totalQty(){
    return this.cart.length;
  }

  get totalQtyDetail(){
    let qty = 0;
    for(let i in this.cart)
      qty += this.cart[i].quantity;
    return qty;
  }

  // get lineItems(){
  //   let tmp, line_items = [];
  //   for(let i in this.cart){
  //     tmp = {
  //       meta_data: [{
  //         key: 'img',
  //         value: this.cart[i].images[0].src
  //       }],
  //       product_id: this.cart[i].id,
  //       quantity: this.cart[i].quantity
  //     };

  //     if(this.cart[i].variation_id)
  //       tmp.variation_id = this.cart[i].variation_id;

  //     line_items.push(tmp);
  //   }

  //   return line_items;
  // }

  get total(){
    this.total1=0;
    let total = 0;

    
    
    for(let i in this.cart)
{
  console.log(this.cart);
  console.log(i);
  
  if(this.cart[i].discount>0)
  {
   this.total1=this.pricestrikt(this.cart[i].discount,this.cart[i].price);
  // console.log(this.total1);
  total += parseInt(this.total1) * parseInt(this.cart[i].quantity);
      return total;
    }
else
{
  total += parseInt(this.cart[i].price) * parseInt(this.cart[i].quantity);
  return total;
}

}
    
  }

  save(){
    return this.storage.set(this.CART_KEY, this.cart);
  }

  reset(){
    this.cart = [];
    return this.storage.remove(this.CART_KEY).then(() => {});
  }

  get all() {
    return this.cart;
  }
  pricestrikt(discount,price)
  {
   
      if(discount!=0)
      {
        this.result=(discount/100)*price;
        this.finalprice=price-this.result;
        return parseInt(this.finalprice);

          }
          else
          {
            return 0;
          }
 
  }




}
