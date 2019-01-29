import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, ModalController, NavParams, ActionSheetController } from 'ionic-angular';
import { WooCommerceProvider, ToastProvider, LoadingProvider, WishlistProvider,RestProvider } from '../../../providers/providers';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { FormGroup, FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-product-grid',
  templateUrl: 'grid.html',
})
export class ProductGridPage {
  private search : FormGroup;
  product = {
    method:'get_product_by_brand',
    brand_id:''
  }; 

  product1 = {
    method:'get_product_by_offer',
    offer_id:''
  };

  product2 = {
    method:'get_product_by_age',
    age_id:''
  }; 

  
  
  showCancel: boolean;
  param: any = {};
  WooCommerce: any;
  subcategory: any;
  products:any; 
  result:any;
   
name:'';
 finalprice:any;

  attributes: any[] = [];
  categories: any;
  min: number;
  max: number;
 
  product3 = {
    method:'get_product_by_cat',
    cat_id:''
  }; 
  
  request= {
    method:'get_recommended',
      };
    
      
      newarrivalrequest= {
    method:'get_new_arrivals',
      };
    
  page: number;
  more: boolean;

  constructor(public toast: ToastProvider, private alert: AlertController, fb: FormBuilder, private translate: TranslateService, private loader: LoadingProvider, public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, private woo: WooCommerceProvider, public wishlist: WishlistProvider, public actionSheetCtrl: ActionSheetController,public http: HttpClient,public restProvider: RestProvider) {
    // this.page = 1;
   // this.param.name = this.navParams.data.params.cat_name;
    // this.product3.cat_id= this.navParams.data.params.cat_id;
   // this.param.search = this.navParams.data.params.search;
    // this.param.per_page = 10;

    // this.search = fb.group({
		// 	name: this.param.name || this.param.search
    // });
   
    if(this.navParams.data.params.brand_id||this.navParams.data.params.banner_type==3)
    {
    
     if(this.navParams.data.params.brand_id)
     {
      this.param.name = this.navParams.data.params.name;
      this.product.brand_id= this.navParams.data.params.brand_id;
     }
     else
     {
      this.param.name = this.navParams.data.params.banner_name;
      this.product.brand_id= this.navParams.data.params.type_id;
     }
    
     this.productByBrandId();
    }
    else if(this.navParams.data.params.offer_id||this.navParams.data.params.banner_type==2)
    {
      console.log(this.navParams.data.params);
      if(this.navParams.data.params.offer_id){
      this.param.name = this.navParams.data.params.name;
     this.product1.offer_id= this.navParams.data.params.offer_id;
    }
    else
    {
     this.param.name = this.navParams.data.params.name;
     this.product1.offer_id= this.navParams.data.params.type_id;
    }
     this.productByOfferId();
    }
   else if(this.navParams.data.params.cat_id||this.navParams.data.params.banner_type==1)
   {
    if(this.navParams.data.params.cat_id)
    {
    this.param.name = this.navParams.data.params.cat_name;
    this.product3.cat_id= this.navParams.data.params.cat_id;
  }
  else{
    this.param.name = this.navParams.data.params.banner_name;
    this.product3.cat_id= this.navParams.data.params.type_id;
  }
    this.productByCatId();
   }
   else if(this.navParams.data.params=='New Arrival')
   {

    this.param.name = this.navParams.data.params;
    this.newArrival();
   }
   else if(this.navParams.data.params=='Recommendations')
   {

    this.param.name = this.navParams.data.params;
    this.wishlist1();
   }
   else if(this.navParams.data.params=='Search')
   {
     this.param.name="Search Result"
     this.products=this.navParams.data.data;
   }

   else
   {
    this.param.name = this.navParams.data.params.name;
    this.product2.age_id= this.navParams.data.params.id;
    this.productByAgeId();
   }
  
   









  //   this.loader.present();
  //   if(this.navParams.data.params.cat_id)
  //   {
  //   this.product3.cat_id= this.navParams.data.params.cat_id;
  //  this. productByCatId()
  //  this.loader.dismiss();
  //  }

    // this.param.min = this.min;
    // this.param.max = this.max;
    // this.loadProducts(this.param);
  }

 
  loadProducts(x: any){
this.product3.cat_id=x.id;
  console.log(this.product3.cat_id); 
    this.restProvider.getProduct(this.product3)
    .then(data => {
      this.products = data;
      console.log(this.products);
      
      // if (this.products.length == x.per_page)
      //   this.more = true;
      
   
    });
  }

  loadMoreProducts(event){
    this.page++;

    this.woo.getAllProducts(this.page, this.param.id, this.param.search, null, null, this.param.per_page, null, this.param.order, this.param.attribute, this.param.attribute_term).then((val) => {
      let temp = val;
      event.complete();
      this.products = this.products.concat(temp);

      if (temp.length < this.param.per_page){
        this.more = false;
        event.enable(false);

        this.translate.get(['NOMORE']).subscribe( x=> {
          this.toast.show(x.NOMORE);
        });
      }
    }, (err) => {
      console.log(err)
    });
  }



  showSort() {
    this.translate.get(['SORT', 'ByName', 'ByPrice','ByDiscount', 'CANCEL']).subscribe( x=> {
      this.actionSheetCtrl.create({
        title: x.SORT,
        buttons: [{
            text: x.ByName,
            handler: () => {
              // this.param.order = 'desc';
              // this.loadProducts(this.param);
              //console.log(this.products);
              this.products .sort(this.sortByProperty('product_name'));
             // console.log(this.products);
            }
          },{
            text: x.ByPrice,
            handler: () => {
              // this.param.order = 'asc';
              // this.loadProducts(this.param);
              //this.products.sort(this.sortByProperty('mrp'));
             this.products.sort(function(obj1, obj2) {
             return obj1.mrp - obj2.mrp;
              
             });
          }
          },{
            text: x.ByDiscount,
            handler: () => {
              // this.param.order = 'asc';
              // this.loadProducts(this.param);
              //this.products .sort(this.sortByProperty('per_discount'));
              this.products.sort(function(obj1, obj2) {
                return obj1.per_discount - obj2.per_discount;
           });
            }
          },
          {
            text: x.CANCEL,
            role: 'cancel'
          }
        ]
      }).present();
    });
  }

  setFav(product: any){
		this.translate.get(['REMOVE_WISH', 'ADDED_WISH']).subscribe( x=> {
			let msg = product.isFav ? x.REMOVE_WISH : x.ADDED_WISH;
			this.wishlist.post(product);
			product.isFav = product.isFav ? false : true;
			this.toast.show(msg);
		});
	}

  showFilter(attribute: any){
    this.loader.present();
    let alert = this.alert.create();
    alert.setTitle(attribute.name);
    this.translate.get(['FILTER_DESC'], {value: attribute.name}).subscribe( x=> {
      alert.setSubTitle(x.FILTER_DESC);
    });

    for(let x in attribute.options){
      alert.addInput({
        type: 'checkbox',
        label: attribute.options[x].name,
        value: attribute.options[x].id,
        checked: this.param.attribute_term ? this.param.attribute_term.includes(attribute.options[x].id) : false
      });
    }

    this.translate.get(['CANCEL']).subscribe( x=> {
      alert.addButton(x.CANCEL);
    });

    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        this.param.attribute = attribute.slug;
        this.param.attribute_term = data.join();  
        this.loadProducts(this.param);
      }
    });

    alert.present();
    this.loader.dismiss();
  }

  showCategory(){
    this.loader.present();
    let alert = this.alert.create();
    this.translate.get(['CATEGORIES', 'CATEGORIES_DESC']).subscribe( x=> {
      alert.setTitle(x.CATEGORIES);
      alert.setSubTitle(x.CATEGORIES_DESC);
    });
   
    for(let x in this.categories){
      alert.addInput({
        disabled: true,
        type: 'radio',
        label: this.categories[x].name
      });
      for(let y in this.categories[x].child){
        alert.addInput({
          type: 'radio',
          label: this.categories[x].child[y].name+' ('+this.categories[x].child[y].count+')',
          value: this.categories[x].child[y],
          checked: this.categories[x].child[y].id == this.param.id ? true : false
        });
      }
    }

    this.translate.get(['CANCEL']).subscribe( x=> {
      alert.addButton(x.CANCEL);
    });
    
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        this.param.id = data.id;
        this.param.name = data.name;
       
        this.loadProducts(this.param);
      }
    });
    alert.present();
    this.loader.dismiss();
  }

  submit(){
    this.param.search = this.search.value.name;
    this.loadProducts(this.param);
  }

  reset(e){
    this.param.search = '';
		this.search.reset();
	}

  backToRoot(){
    this.navCtrl.pop();
  }

  goTo(page, params){
    this.navCtrl.push(page, {params: params});
  }


  productByCatId() {
    this.loader.present();	
    this.restProvider.getProduct(this.product3)
    .then(data => {
      if(data=='failed')
      {
        this.toast.show("Product not available"); 
        this.loader.dismiss();
      }
      else{
        this.products = data;
        this.loader.dismiss();
      }
      console.log(this.products);
    });
  
  }

  productByBrandId() {
    this.loader.present();	
    this.restProvider.getProduct(this.product)
    .then(data => {
      if(data=='failed')
      {
        this.toast.show("Product not available"); 
        this.loader.dismiss();
      }
      else{
        this.products = data;
        this.loader.dismiss();
      }
      console.log(this.products);
    });
   
  }

  productByOfferId() {
    this.loader.present();	
    this.restProvider.getProduct(this.product1)
    .then(data => {
      if(data=='failed')
      {
        this.toast.show("Product not available"); 
        this.loader.dismiss();
      }
      else{
        this.param.name=data[0].offer_name;
        this.products = data;
        this.loader.dismiss();
      }
     
      console.log(this.products);
    });
  
  }

  productByAgeId() {
    this.loader.present();	
    this.restProvider.getProduct(this.product2)
    .then(data => {
      this.products = data;
      console.log(this.products);
      this.loader.dismiss();
    });
   
  }

  public sortByKey(array, key) {
    return array.sort(function (a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 0 : 1));
    });
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

	wishlist1() {
    this.loader.present();	
    this.restProvider.getRecommendations(this.request)
    .then(data => {
      this.products = data;
      this.loader.dismiss();
    });
   
	}
	
	newArrival() {
    this.loader.present();	
    this.restProvider.getNewArrivalList(this.newarrivalrequest)
    .then(data => {
		console.log(data);
			      this.products = data;
            this.loader.dismiss();
    });
   
  }

  sortByProperty = function (property) {
    
        return function (x, y) {
    
            return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
    
        };
    
    };
    

}
