import { Component, DoCheck } from 'angular2/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES } from 'angular2/router';

import { Search } from './search/search';
import { TopSearch } from './search/topSearch';
import { TopSearchService } from './search/topSearch.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { SearchComponent } from './search/search.component';

@Component({
    selector: 'home',
    templateUrl: 'app/home/home.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [TopSearchService]
})

@RouteConfig([
    {
        path: '/',
        name: 'Welcome',
        component: WelcomeComponent,
        useAsDefault: true
    },
    {
        path: '/search/:query/:type',
        name: 'Search',
        component: SearchComponent
    }
])

export class HomeComponent implements DoCheck {
    
    //text
    talks = "Talks";
    tutorials = "Tutorials";
    
    //variable de home
    type: boolean;
    query: string;
    search: Search[];
    topSearch: TopSearch[];
    active: boolean;
    empty: boolean;
    differ: any;
    
    constructor(
        private _topSearchService: TopSearchService,
        private _router: Router) {
        
        this.type = false;
        this.active = false;
        this.empty = false;
        
        this._topSearchService.getTopSearch().then(topSearch=> this.topSearch = topSearch);
    }
        
    //fonction de recherche
    onSearch() {        
        if(this.query){            
            let link = ['Search', { query: this.query, type: this.type }];
            this._router.navigate(link);
            this.empty=false;            
        } else {
            this.empty=true;
        }
    }
    
    popular(popular: string){
        this.query = popular;
        this.onSearch();
    }
    
    isActive(){
    console.log('change');
        if (this.query){ 
            this.active = true;
        }
        else { 
            this.active = false;
        }
    
    }
    
    ngDoCheck() {
        if (this.query){ 
            this.active = true 
        } else { 
            this.active = false 
        }
	}
}