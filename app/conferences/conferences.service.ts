import { Conferences } from './conferences';
import { CONFERENCES } from './mock-conferences';
import { Injectable } from 'angular2/core';

@Injectable()
export class ConferencesService {
    getConferences() {
        return Promise.resolve(CONFERENCES);
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