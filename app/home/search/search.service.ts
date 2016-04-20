import { Search } from './search';
import { TopSearch } from './topSearch';
import { TOPSEARCH } from './mock-topSearch';
import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {
    
    constructor(private http: Http) { }
        
    getSearch(query: string, type: string) {
        return this.http.get('https://youcode-backend.cleverapps.io/search?query=' + query + '&istuts=' + type)
        .map( responseData => <Search[]> responseData.json())
        .catch(this.handleError);
	}
        
    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
    getTopSearch() {
        return Promise.resolve(TOPSEARCH);
    }
    
}