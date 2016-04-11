import { About } from './about';
import { ABOUT } from './mock-about';
import { Injectable } from 'angular2/core';

@Injectable()
export class AboutService {
    getAbout() {
        return Promise.resolve(ABOUT);
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