import { Component } from 'angular2/core';

import { Channels } from './channels';
import { Video } from './video';
import { Info } from './info';
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
//    information: Info[] = [];
    selectedChannel: Channels ;
    loading = true;
    
    constructor(private _channelsService: ChannelsService) {
        this._channelsService.getChannels()
            .subscribe( 
                channels => this.channels = channels,
                error =>  this.errorMessage = true,
                () =>  this.getAllInfo()
            )   
    }
    
    getVideoSelected (){
        this._channelsService.getVideo(this.selectedChannel.ytid)
            .subscribe( 
                video => this.video = video,
                error =>  this.errorMessage = true
            )
    }
    
    getAllInfo(){
        if (this.channels) {
            this.channels.forEach((channel) => {
                this._channelsService.getInfo(channel.ytid)
                    .subscribe( 
                        info => channel.info = info,
                        error =>  this.errorMessage = true,
                        () => this.extractInfo(channel)
                    )                
                });            
        }
    }
    
    onSelect(channel: Channels) { 
        this.selectedChannel = channel;
        this.getVideoSelected();
    }
    
    extractInfo(channel: Channels){
        channel.bannerImageUrl = channel.info.items[0].brandingSettings.image.bannerImageUrl;
        if (channel.info.items[0].brandingSettings.image.bannerMobileImageUrl){
            channel.bannerMobileExtraHdImageUrl = channel.info.items[0].brandingSettings.image.bannerMobileImageUrl;
        } else {
            channel.bannerMobileExtraHdImageUrl =  channel.info.items[0].brandingSettings.image.bannerImageUrl;
        }
        channel.id = channel.info.items[0].id;
        
        this.selectFirstChannel();
    }
    
    selectFirstChannel(){
        this.selectedChannel = this.channels[0];
        this.getVideoSelected();        
        this.loading = false;    
    }
}