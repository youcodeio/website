import { Component } from 'angular2/core';

import { Channels } from './channels';
import { Video } from './video';
import { Info } from './info';
import { ChannelsService } from './channels.service';
import { TimeAgoPipe } from 'angular2-moment/TimeAgoPipe.js';
import { OrderBy } from "./orderBy"

@Component({
    selector: 'channels',
    templateUrl: 'app/channels/channels.component.html',
    providers: [ChannelsService],
    pipes: [TimeAgoPipe, OrderBy]  
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
        let banner = channel.info.items[0].brandingSettings.image.bannerImageUrl;
        let mobile =  channel.info.items[0].brandingSettings.image.bannerMobileImageUrl;
        
        if (banner){
            channel.bannerImageUrl = banner;       
            if (mobile){
                channel.bannerMobileExtraHdImageUrl = mobile;
            } else {
                channel.bannerMobileExtraHdImageUrl  = "../../img/default_banner.jpg";
            }
        } else {
            channel.bannerImageUrl = "../../img/default_banner.jpg";
            channel.bannerMobileExtraHdImageUrl = "../../img/default_banner.jpg";
        }

        channel.id = channel.info.items[0].id;
        channel.statistics = channel.info.items[0].statistics.viewCount;
        
        this.selectFirstChannel();
    }
    
    selectFirstChannel(){
        this.selectedChannel = this.channels[0];
        this.getVideoSelected();        
        this.loading = false;    
    }
}