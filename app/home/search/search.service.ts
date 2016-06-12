import { Search } from './search';
import { TopSearch } from './topSearch';
import { TOPSEARCH } from './mock-topSearch';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {
    
    constructor(private http: Http) { }
        
    getSearch(query: string, type: string) {
        return this.http.get('https://youcode-backend.cleverapps.io/search?query=' + query + '&istuts=' + type)
        .map( responseData => <Search[]> responseData.json())
        .catch(this.handleError);
	}
        
    private handleError (error: any) {
      // In a real world app, we might use a remote logging infrastructure
      // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error("ERROR"); 
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }   
    
    getTopSearch() {
        return Promise.resolve(TOPSEARCH);
    }
    
}