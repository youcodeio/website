import { Component } from 'angular2/core';

import { Channels } from './channels';
import { Video } from './channels';
import { ChannelsService } from './channels.service';
import { TimeAgoPipe } from 'angular2-moment/TimeAgoPipe.js'; 

@Component({
    selector: 'channels',
    templateUrl: 'app/channels/channels.component.html',
    providers: [ChannelsService],
    pipes: [TimeAgoPipe]  
})
export class ChannelsComponent {
    channels: Channels[];
    video: Video[];
    selectedChannel: Channels ;
    loading = true;
    
    constructor(private _channelsService: ChannelsService) {
        this._channelsService.getChannels()
            .subscribe( 
                channels => this.channels = channels,
                error =>  this.errorMessage = true,
                () => this.loading = false
            )
        
        this._channelsService.getChannels()
            .subscribe( 
                channels => this.selectedChannel = channels[0],
                error =>  this.errorMessage = true,
                () => this.getVideoSelected ()
            )       
    }
    
    getVideoSelected (){
        this._channelsService.getVideo(this.selectedChannel.ytid)
            .subscribe( 
                video => this.video = video,
                error =>  this.errorMessage = true
            )
    }
    
    onSelect(channel: Channels) { 
        this.selectedChannel = channel;
        this.getVideoSelected();
    }
}