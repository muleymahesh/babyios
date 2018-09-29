import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { WooCommerceProvider, LoadingProvider,RestProvider } from '../../providers/providers';
import { HttpClient } from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
  categories : any[];
  Brands:any;
  myBraands = {
    method:'get_all_brand'
    };
  constructor(private nav: NavController, private loader: LoadingProvider, private woo: WooCommerceProvider,public restProvider: RestProvider,public http: HttpClient) {
   
    // this.woo.getSubCategories().then( (val) => {
		// 	this.categories = val;
      
  //	});
  this.getBrands();
  
  }

  toggleSection(i) {
    this.categories[i].open = !this.categories[i].open;
  }

  toggleItem(i, j) {
    this.categories[i].child[j].open = !this.categories[i].child[j].open;
  }


	getBrands() {
    this.restProvider.getAgeGroup(this.myBraands)
    .then(data => {
      this.Brands = data;
     
    });
  }




  goTo(page, params){
    this.nav.push(page, {params: params});
  }

}
