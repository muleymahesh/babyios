import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { WooCommerceProvider,RecentProvider, ToastProvider, LoadingProvider, WishlistProvider,HistoryProvider } from '../../providers/providers';
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
	
	showList: boolean = false;
	searchQuery: string = '';
	item:any;

finalprice:any;
allproducts:any;

	categories:any;
	slides:any[25];
	slideRequest = {
	  method:'get_all_banner'
		};

		ad_banner:any;
		adRequest = {
			method:'get_all_ad_banner'
			};

	  cateogry = {
		method:'get_all_category'
	  }; 
	
		agegroups:any;
    agegroup = {
      method:'get_all_agegroup'
    }; 
    aproducts:any;
		allproduct={
			method:'get_all_product'
		}

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

			
		constructor(public history: RecentProvider,public nav: NavController, statusBar: StatusBar, private translate: TranslateService, private toast: ToastProvider, public wishlist: WishlistProvider, public loader: LoadingProvider, public modalCtrl: ModalController, private woo: WooCommerceProvider,public restProvider: RestProvider,public http: HttpClient) {
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
		this.getAllproduct();
console.log(this.history.all);
this.his= this.history.all;
	console.log(this.his);
		this.getBanner();
	
	}

	getAllproduct()
	{
		this.restProvider.getproducts(this.allproduct)
    .then(data => {
      this.aproducts = data;
		console.log(this.aproducts);
		this.initializeItems();

    });
	}

	ionViewDidEnter() {
		this.showList = false;
	console.log("hiii");
	this.his= this.history.all;
		this.goHome(); 
		console.log(this.his);

	
	}
	setFav(product: any){
		this.translate.get(['REMOVE_WISH', 'ADDED_WISH']).subscribe( x=> {
			let msg = product.isFav ? x.REMOVE_WISH : x.ADDED_WISH;
			this.wishlist.post(product);
			product.isFav = product.isFav ? false : true;
			this.toast.show(msg);
		});
	}
go(data)
{
if(data.banner_type!=0 && data.banner_type!=4)
{
this.goTo('ProductGridPage',data);
}
else if(data.banner_type==4 )
{
this.	goTo('ProductPage',data);
}
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
			this.getAdBanner();
			this.wishlist1();
		
		});
		this.loader.dismiss();
	  }
	  getCategory() {
		this.restProvider.getAgeGroup(this.cateogry)
		.then(data => {
		this.categories = data;
		this.getAgeGruops();
		});
		}
		

		getAdBanner() {
			
			//this.loader.present();	
			
			this.restProvider.getBanner(this.adRequest)
			.then(data => {
			
				this.ad_banner = data;
				console.log("adds")
		console.log(this.ad_banner);
				//	this.wishlist1();
			
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

		goHome(){
			this.searchQuery='';
			this.showList = false;
			this.nav.popToRoot();
			this.nav.parent.select(0);
		
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
	initializeItems() {
    this.item=this.aproducts; 
  }


	getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      
			// Filter the items
		//	console.log(this.aproducts[0].product_name); 
      this.item = this.item.filter((item) => {
        return (item.product_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
      
      // Show the results
      this.showList = true;
    } else {
      
      // hide the results when the query is empty
      this.showList = false;
    }
  }

}
