import { TopSearch } from './topSearch';
import { TOPSEARCH } from './mock-topSearch';
import { Injectable } from 'angular2/core';

@Injectable()
export class TopSearchService {
    getTopSearch() {
        return Promise.resolve(TOPSEARCH);
    }
    
//    getChannelsSlowly() {
//        // 2 seconds
//        return new Promise<Channels[]>(resolve =>setTimeout(()=>resolve(CHANNELS), 2000));
//    }
//    
//    getChannels(id: number) {
//        return Promise.resolve(CHANNELS).then(channels => channels.filter(channel => channel.id === id)[0]);
//    }
}