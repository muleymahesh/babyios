import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { Platform,IonicPage, NavController, ModalController,AlertController } from 'ionic-angular';
import { WooCommerceProvider,RecentProvider, ToastProvider,AddressProvider, LoadingProvider, WishlistProvider,HistoryProvider } from '../../providers/providers';
import { TranslateService } from '@ngx-translate/core';
import { App } from '../../app/app.global';
import { RestProvider } from '../../providers/rest/rest';
import { HttpClient } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Network } from '@ionic-native/network';
@IonicPage()
@Component({
  selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {
	App: any;
	flag:any;test:any;

	//categories: any[] = new Array;
	data: any[] = new Array();
	app: any;
  result:any;
	add:any;
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
			method:'home'
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

			searchrequest={
				method:"search_product",
				query:""
			};
      his:any;

			
		constructor( public alert: AlertController, public network:Network,private splashScreen: SplashScreen,public platform:Platform,private address:AddressProvider,public history: RecentProvider,public nav: NavController, statusBar: StatusBar, private translate: TranslateService, private toast: ToastProvider, public wishlist: WishlistProvider, public loader: LoadingProvider, public modalCtrl: ModalController, private woo: WooCommerceProvider,public restProvider: RestProvider,public http: HttpClient) {
		this.App = App;
		this.flag=0;
		this.platform.ready().then(() => {
			this.loader.present();
this.getAllproduct();
			this.restProvider.getNewArrivalList(this.adRequest)
			.then(data => {
				console.log(data);
				if(data.result=="success")
				{
					this.slides=data.banner_data;
					this.ad_banner=data.adbanner;
					this.categories=data.category;
					this.agegroups=data.age_data;
					this.offers=data.offer_data;
					this.Brands=data.brand_data;
					this.rlist=data.rec_data;
					this.nlist=data.new_data;
        this.loader.dismiss();
				}
				else
				{
					this.loader.dismiss();
				//	this.loader.load();
				if(this.flag==1)
				{
					this.flag=0;
					
				}
			//		this.toast.show("something went wrong please try again");
					this.flag=1;
					this.alert.create({
						title: "Alert",
						message: "we are having trouble loading content. try again",
						buttons: [{
							text: 'Try again',
							handler: () => {
							//	this.loader.dismiss();
								this.ionViewDidEnter();
               this.flag=0;
							}
						}]
				
							
						}).present();
					
				}
			});
	
			this.splashScreen.hide();
		});
	


	this.wishlist1();


this.his= this.history.all;
this.his.sort(function(obj1, obj2) {
	return obj2.no_of_time - obj1.no_of_time;
	
});
	//console.log(this.his);
	
	}

	getAllproduct()
	{
		this.restProvider.getproducts(this.allproduct)
    .then(data => {
      this.aproducts = data;
		//console.log(this.aproducts);
		this.initializeItems();

    });
	}

	ionViewDidEnter() {
		this.showList = false;
//this.loader.present();
		this.restProvider.getNewArrivalList(this.adRequest)
		.then(data => {
			console.log(data);
			this.test=data;
			if(data.result=="success")
			{
				this.slides=data.banner_data;
				this.ad_banner=data.adbanner;
				this.categories=data.category;
				this.agegroups=data.age_data;
				this.offers=data.offer_data;
				this.Brands=data.brand_data;
				this.rlist=data.rec_data;
				this.nlist=data.new_data;
//this.loader.dismiss();
			}
			else
			{

			//	this.loader.dismiss();
				if(this.flag!=1)
				{
			//	this.loader.load();
			//	this.toast.show("something went wrong please try again");
				this.alert.create({
					title: "Alert",
					message: "we are having trouble loading content. try again",
					buttons: [{
						text: 'Try again',
						handler: () => {
						//	this.loader.dismiss();
							this.ionViewDidEnter();
							
						}
						}]
			
						
					}).present();
				//this.loader.dismiss();
			}
		}
		});
	
//	console.log("hiii");
	this.his= this.history.all;
	this.his.sort(function(obj1, obj2) {
		return obj2.no_of_time - obj1.no_of_time;
	});
		this.goHome(); 
	//	console.log( "his",this.his);
		

	
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
		
    });

	}
	
	newArrival() {
    this.restProvider.getNewArrivalList(this.newarrivalrequest)
    .then(data => {
		//console.log(data);
			      this.nlist = data;
		
    });

  }

	getBanner() {
		
	
		
		this.restProvider.getBanner(this.slideRequest)
		.then(data => {
		
			this.slides = data;
		
		
		});
	//	this.loader.dismiss();
	  }
	  getCategory() {
		this.restProvider.getAgeGroup(this.cateogry)
		.then(data => {
		this.categories = data;
	
		});
		}
		

		getAdBanner() {
			
			//this.loader.present();	
			
			this.restProvider.getBanner(this.adRequest)
			.then(data => {
			
				this.ad_banner = data;
			//	console.log("adds")
//		console.log(this.ad_banner);
				//	this.wishlist1();
			
			});
			}

		getOffer() {
			this.restProvider.getAgeGroup(this.offer)
			.then(data => {
				this.offers = data;
	//			console.log(this.offers );
			 
			});
		
		}
	
		getBrands() {
			this.restProvider.getAgeGroup(this.myBraands)
			.then(data => {
				this.Brands = data;
			
			});
		}

		getAgeGruops() {
			this.restProvider.getAgeGroup(this.agegroup)
			.then(data => {
				this.agegroups = data;
			
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
		if(this.showList==true)
		{
			this.showList=false;
		}
		this.nav.push(page,{params: params});
	}
	initializeItems() {
		this.item=this.aproducts; 
		// this.restProvider.getProduct(this.searchrequest).
		// then(data=>{
		// 	if(data.result=="success")
		// 	{
		// 		console.log(this.item);
		// 		this.showList = true;
		// 		console.log(this.showList);
		// 		this.item=data.data;
		// 	console.log(this.item);
		// 			// return (item.product_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
		// 	}
		// 	else{
		// 		this.showList = false;
		// 	}
		// }

		// );
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

	private listenConnection(): void {
		this.network.onDisconnect()
		  .subscribe(() => {
			this.alert.create({
				title: "Remove product",
				message: "Do you want to remove from cart?",
				buttons: [{
					text: 'OK'
				  }]
					
					
			  }).present();
		  });
	  }
	  
	
		// omitted;
	  
	  

}
