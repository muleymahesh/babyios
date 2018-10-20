import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { WooCommerceProvider, ToastProvider, LoadingProvider, WishlistProvider,HistoryProvider } from '../../providers/providers';
import { TranslateService } from '@ngx-translate/core';
import { App } from '../../app/app.global';
import { RestProvider } from '../../providers/rest/rest';
import { HttpClient } from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {
	App: any;
	//categories: any[] = new Array;
	data: any[] = new Array();
	app: any;
  result:any;
	

finalprice:any;
allproducts:any;

	categories:any;
	slides:any[25];
	slideRequest = {
	  method:'get_all_banner'
	  };

	  cateogry = {
		method:'get_all_category'
	  }; 
	
		agegroups:any;
    agegroup = {
      method:'get_all_agegroup'
    }; 

		offers:any;
    offer = {
      method:'get_all_offers'
    }; 



    Brands:any;
    myBraands = {
      method:'get_all_brand'
			};
			
		rlist: any;
			request= {
		method:'get_recommended',
			};

			nlist: any;
			newarrivalrequest= {
		method:'get_new_arrivals',
			};
his:any;

			
		constructor(public history: HistoryProvider,public nav: NavController, statusBar: StatusBar, private translate: TranslateService, private toast: ToastProvider, public wishlist: WishlistProvider, public loader: LoadingProvider, public modalCtrl: ModalController, private woo: WooCommerceProvider,public restProvider: RestProvider,public http: HttpClient) {
		this.App = App;

		// this.woo.getAllCategories().then( (tmp) => {
		// 	this.categories = tmp;
		// 	this.woo.loadSetting().then( x=> {
		// 		if(x.currency){
		// 			this.app = x;
		// 			for(let i in tmp){
		// 				if(tmp[i].count > 4 && tmp[i].parent !=0){
		// 					this.woo.getAllProducts(null, tmp[i].id, null, null, null, 9, null, null).then( (val) => {
		// 						this.data.push(val);
		// 					})
		// 				}
		// 			}
		// 			this.loader.dismiss();
		// 		}		
		// 	});

		// });
this.his=history.all;
		console.log(this.his);
		this.getBanner();

	}

	setFav(product: any){
		this.translate.get(['REMOVE_WISH', 'ADDED_WISH']).subscribe( x=> {
			let msg = product.isFav ? x.REMOVE_WISH : x.ADDED_WISH;
			this.wishlist.post(product);
			product.isFav = product.isFav ? false : true;
			this.toast.show(msg);
		});
	}


	wishlist1() {
    this.restProvider.getRecommendations(this.request)
    .then(data => {
      this.rlist = data;
			this.newArrival();
    });

	}
	
	newArrival() {
    this.restProvider.getNewArrivalList(this.newarrivalrequest)
    .then(data => {
		console.log(data);
			      this.nlist = data;
			this.getCategory(); 
    });

  }

	getBanner() {
		
		this.loader.present();	
		
		this.restProvider.getBanner(this.slideRequest)
		.then(data => {
		
			this.slides = data;
			this.wishlist1();
		
		});
	  }
	  getCategory() {
		this.restProvider.getAgeGroup(this.cateogry)
		.then(data => {
		this.categories = data;
		this.getAgeGruops();
		});
		}
		

		getOffer() {
			this.restProvider.getAgeGroup(this.offer)
			.then(data => {
				this.offers = data;
			 
			});
			this.loader.dismiss();
		}
	
		getBrands() {
			this.restProvider.getAgeGroup(this.myBraands)
			.then(data => {
				this.Brands = data;
				this.getOffer();
			});
		}

		getAgeGruops() {
			this.restProvider.getAgeGroup(this.agegroup)
			.then(data => {
				this.agegroups = data;
				this.getBrands();
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

	 showSearch() {
	 	this.modalCtrl.create('SearchPage').present();
	 }

	goTo(page, params){
		this.nav.push(page,{params: params});
	}

}
