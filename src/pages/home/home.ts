import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';
import { Platform,IonicPage, NavController, ModalController,AlertController } from 'ionic-angular';
import { WooCommerceProvider,RecentProvider, ToastProvider,AddressProvider, LoadingProvider, WishlistProvider,HistoryProvider } from '../../providers/providers';
import { TranslateService } from '@ngx-translate/core';
import { App } from '../../app/app.global';
import { RestProvider } from '../../providers/rest/rest';
import { HttpClient } from '@angular/common/http';
//import { Keyboard } from '@ionic-native/keyboard';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network';
import { Keyboard } from 'ionic-angular/platform/keyboard';
//mport { KeyedRead } from '@angular/compiler';

@IonicPage()
@Component({
  selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {
	App: any;
	flag:any;test:any;
splitted:any;
adurl:any;
item:any;
	//categories: any[] = new Array;
	data: any[] = new Array();
	app: any;
  result:any;
	add:any;
	showList: boolean = false;
	searchQuery: string = '';
	item1:any;

finalprice:any;
allproducts:any;

	categories:any;
	slides:any[25];

	orderRequest = {
		method:'get_order_detail',
		o_id:''
		  };



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

			
		constructor(private storage:Storage, public key:Keyboard,public alert: AlertController, public network:Network,private splashScreen: SplashScreen,public platform:Platform,private address:AddressProvider,public history: RecentProvider,public nav: NavController, statusBar: StatusBar, private translate: TranslateService, private toast: ToastProvider, public wishlist: WishlistProvider, public loader: LoadingProvider, public modalCtrl: ModalController, private woo: WooCommerceProvider,public restProvider: RestProvider,public http: HttpClient) {
		this.App = App;
		this.flag=0;

		this.storage.get('O_id')
		.then(data => {
					  console.log('your data => ', data);
					  if(data!=null)
					  {
		  this.orderRequest.o_id=data;
		  this.restProvider.getMyOrder(this.orderRequest)
		  .then(data => {
			  console.log(data);
			  if(data.orders[0].order_status=='delivered')
			  {
				this.alert.create({
					title: "Alert",
					message: "Do you want to rate the product?",
					buttons: [{
						text: 'NO',
						handler: () => {
							this.storage.remove('O_id');
					
						}
					  },{
						text: 'YES',
						handler: () => {
							this.storage.remove('O_id');
						this.goTo('OrdersPage',data.orders[0])
						}
					  }]
			
						
					}).present();
			  }
			 

		  })
		}});


		this.platform.ready().then(() => {
			this.loader.present();
//this.getAllproduct();
			this.restProvider.getNewArrivalList(this.adRequest)
			.then(data => {
				console.log(data);
				if(data.result=="success")
				{
					this.slides=data.banner_data;
					this.ad_banner=data.adbanner;
					this.adurl='http://www.babyneeds.co.in/babyneeds/product_image/'+this.ad_banner[0].image;
					console.log(this.adurl);
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
	canclesearch()
	{
		this.showList = false;
		this.key.close();
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

    onlyUnique(value, index, self) { 
		return self.indexOf(value) === index;
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
				this.adurl='http://www.babyneeds.co.in/babyneeds/product_image/'+this.ad_banner[0].image;
				console.log(this.adurl);
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
		closeKeyboard()
{
	this.key.close();
	this.searchrequest.query='';
	this.Go('ProductGridPage','Search',this.item);
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
			this.searchrequest.query='';
		}
		this.nav.push(page,{params: params});
	}
	Go(page,params,data)
	{
		if(this.showList==true)
		{
			this.showList=false;
			this.searchrequest.query='';
		}
		this.nav.push(page,{params: params,data: data});

	}
	initializeItems() {
		//this.item1=this.aproducts; 
		if(this.loader.isShowing())
{
		}
		else{
			this.loader.present();
		}
	
		this.restProvider.getSearch(this.searchrequest).
		then(data=>{
			if(this.loader.isShowing())
			{this.loader.dismiss();
					}
				console.log(data);
			if(data.result=="success")
			{
			
				console.log(this.item);
				this.showList = true;
				console.log(this.showList);
				this.item=data.data;
			console.log(this.item);
			
					// return (item.product_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
			}
			else{
				this.item=null;
				this.showList = false;
			
			}
		
		}

		);
  }


	getItems(ev: any) {
    // Reset items back to all of the items
   

    // set val to the value of the searchbar
	let val = ev.target.value;
if(val.length>=3)
{
	this.initializeItems();
}
	//console.log("val=",val);
//    this. splitted = val.split(" "); 
// 	console.log(this.splitted);
//     // if the value is an empty string don't filter the items
//     if (val && val.trim() != '') {
      
// 			// Filter the items
// 		//	console.log(this.aproducts[0].product_name); 
//       this.item = this.item1.filter((item) => {

// 		for(let j=0;j<this.splitted.length;j++)
// 	{
// 		if(this.splitted[j]!="" && j>=0 && this.splitted[j]!="baby")
// 		{
// 			//console.log("out of if : ",item.p_id);
						
//      if(item.product_name.toLowerCase().indexOf(this.splitted[j].toLowerCase()) > -1)
//       {
// 		//  console.log("index: ",j);
// 	    //console.log(item.product_name);
// 		//  console.log(item.p_id);
// 		//  console.log(item.product_name.toLowerCase().indexOf(this.splitted[j].toLowerCase()) > -1)
// 	      return true;
//       }
// 	}
// }
// 	return false;




//       });
      
// 	  // Show the results
// 	  var seenNames = {};
// 	  console.log(this.item);
// 	  var array = this.item;
// 	  array = array.filter(function(currentObject) {
// 		if (currentObject.product_name in seenNames) {
// 			return false;
// 		} else {
// 			seenNames[currentObject.product_name] = true;
// 			return true;
// 		}
// 	})
//       this.item=array;
// 	  console.log(array);
//       this.showList = true;
//     } else {
      
//       // hide the results when the query is empty
//       this.showList = false;
//     }
  }

	// private listenConnection(): void {
	// 	this.network.onDisconnect()
	// 	  .subscribe(() => {
	// 		this.alert.create({
	// 			title: "Remove product",
	// 			message: "Do you want to remove from cart?",
	// 			buttons: [{
	// 				text: 'OK'
	// 			  }]
					
					
	// 		  }).present();
	// 	  });
	 // }
	  
	
		// omitted;
	  
	  

}
