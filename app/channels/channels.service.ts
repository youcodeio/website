import { Channels } from './channels';
import { Video } from './video';
import { Info } from './info';
import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChannelsService {
    
    constructor(private http: Http) { }    
    
    getChannels() {
        return this.http.get('https://youcode-backend.cleverapps.io/channels')
            .map( responseData => <Channels[]> responseData.json())
//            .do(data => console.log(data))
            .catch(this.handleError);
	}
    
    getVideo(id: string) {
        return this.http.get('https://youcode-backend.cleverapps.io/channels/' + id + '/lastVideos')
            .map( responseData => <Video[]> responseData.json())
//            .do(data => console.log(data))
            .catch(this.handleError);
	}
    
    getInfo(id: string) {
        return this.http.get('https://youcode-backend.cleverapps.io/channels/' + id + '/info')
            .map( responseData => <Info> responseData.json())
//            .do(data => console.log(data))
            .catch(this.handleError);
	}
    
    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    

}