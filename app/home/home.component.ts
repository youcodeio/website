import { Component, DoCheck } from 'angular2/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES, RouteParams } from 'angular2/router';

import { Search } from './search/search';
import { TopSearch } from './search/topSearch';
import { SearchService } from './search/search.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { SearchComponent } from './search/search.component';

@Component({
    selector: 'home',
    templateUrl: 'app/home/home.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [SearchService]
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
        private _searchService: SearchService,
        private _router: Router,
        private _routeParams: RouteParams) {
        
        this.active = false;
        this.empty = false;
        this.type = false;
        
        this._searchService.getTopSearch().then(topSearch=> this.topSearch = topSearch);
    }
        
    //fonction de recherche
    onSearch() {        
        if(this.query){            
            let link = ['Search', { query: this.query.replace('#','alt043').replace(' ','alt08'), type: this.type }];
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
        
    ngDoCheck() {
        if (this.query){ 
            this.active = true 
        } else { 
            this.active = false 
        }
	}
    
    toggle(){
        this.type = !this.type;
        this.onSearch();
        this.type = !this.type;
    }
}