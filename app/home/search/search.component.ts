import { Component } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Search } from './search';
import { SearchService } from './search.service';
import { TimeAgoPipe } from 'angular2-moment/TimeAgoPipe.js';
import { PaginatePipe, PaginationControlsCmp, PaginationService } from 'ng2-pagination';


@Component({
    selector: 'search',    
    templateUrl: 'app/home/search/search.component.html',
    providers: [SearchService, PaginationService],
    directives: [PaginationControlsCmp],
    pipes: [TimeAgoPipe,PaginatePipe]
})

export class SearchComponent {
    search: Search[];
    query: string;
    type: boolean;
    errorMessage = false;
    loading = true;
    
    
    //text
    talks = "Talks";
    tutorials = "Tutorials";
    
    constructor(
        private _searchService: SearchService,
        private _routeParams: RouteParams) {
        
        this.query = decodeURIComponent(this._routeParams.get('query'));
            this.type = this._routeParams.get('type');
            this._searchService.getSearch(this.query,this.type)
                .subscribe( 
                    search => this.search = search,
                    error =>  this.errorMessage = true,
                    () => this.loading = false
            );
    }
    
    public config: IPaginationInstance = {
        id: 'custom',
        itemsPerPage: 6,
        currentPage: 1
    };

}