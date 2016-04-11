import { Channels } from './channels';
import { Video } from './channels';
import { CHANNELS } from './mock-channels';
import { VIDEO } from './mock-video';
import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChannelsService {
    
    constructor(private http: Http) { }
    
    getChannelsBouchon() {
        return Promise.resolve(CHANNELS);
    }
    
    getVideoBouchon() {
        return Promise.resolve(VIDEO);
    }
    
    getChannels() {
        return this.http.get('https://youcode-backend.cleverapps.io/channels')
            .map( responseData => <Channels[]> responseData.json())
            .do(data => console.log(data))
            .catch(this.handleError);
	}
    
    getVideo(id: string) {
        return this.http.get('https://youcode-backend.cleverapps.io/channel/' + id)
            .map( responseData => <Video[]> responseData.json())
            .do(data => console.log(data))
            .catch(this.handleError);
	}
    
    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    

}