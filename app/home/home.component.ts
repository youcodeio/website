import { Component } from 'angular2/core';
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

export class HomeComponent {
    
    //text
    talks = "Talks";
    tutorials = "Tutorials";
    
    //variable de home
    type = false;
    query: string;
    search: Search[];
    topSearch: TopSearch[];
    searched = false;
    
    constructor(
        private _topSearchService: TopSearchService,
        private _router: Router) {
        
        this._topSearchService.getTopSearch().then(topSearch=> this.topSearch = topSearch);
    }
        
    //fonction de recherche
    onSearch() {        
        //changement de l'url
        let link = ['Search', { query: this.query, type: this.type }];
        this._router.navigate(link);
        this.searched = true
    }
    
    popular(popular: string){
        this.query = popular;
        this.onSearch();
    }
}