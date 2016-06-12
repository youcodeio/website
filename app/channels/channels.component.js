"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var channels_service_1 = require('./channels.service');
var TimeAgoPipe_1 = require('angular2-moment/TimeAgoPipe');
var orderBy_1 = require("./orderBy");
var ChannelsComponent = (function () {
    function ChannelsComponent(_channelsService) {
        var _this = this;
        this._channelsService = _channelsService;
        this.loading = true;
        this._channelsService.getChannels()
            .subscribe(function (channels) { return _this.channels = channels; }, function (error) { return _this.errorMessage = true; }, function () { return _this.getAllInfo(); });
    }
    ChannelsComponent.prototype.getVideoSelected = function () {
        var _this = this;
        this._channelsService.getVideo(this.selectedChannel.ytid)
            .subscribe(function (video) { return _this.video = video; }, function (error) { return _this.errorMessage = true; });
    };
    ChannelsComponent.prototype.getAllInfo = function () {
        var _this = this;
        if (this.channels) {
            this.channels.forEach(function (channel) {
                _this._channelsService.getInfo(channel.ytid)
                    .subscribe(function (info) { return channel.info = info; }, function (error) { return _this.errorMessage = true; }, function () { return _this.extractInfo(channel); });
            });
        }
    };
    ChannelsComponent.prototype.onSelect = function (channel) {
        this.selectedChannel = channel;
        this.getVideoSelected();
    };
    ChannelsComponent.prototype.extractInfo = function (channel) {
        var banner = channel.info.items[0].brandingSettings.image.bannerImageUrl;
        var mobile = channel.info.items[0].brandingSettings.image.bannerMobileImageUrl;
        if (banner) {
            channel.bannerImageUrl = banner;
            if (mobile) {
                channel.bannerMobileExtraHdImageUrl = mobile;
            }
            else {
                channel.bannerMobileExtraHdImageUrl = "../../img/default_banner.jpg";
            }
        }
        else {
            channel.bannerImageUrl = "../../img/default_banner.jpg";
            channel.bannerMobileExtraHdImageUrl = "../../img/default_banner.jpg";
        }
        channel.id = channel.info.items[0].id;
        channel.statistics = channel.info.items[0].statistics.viewCount;
        this.selectFirstChannel();
    };
    ChannelsComponent.prototype.selectFirstChannel = function () {
        this.selectedChannel = this.channels[0];
        this.getVideoSelected();
        this.loading = false;
    };
    ChannelsComponent = __decorate([
        core_1.Component({
            selector: 'channels',
            templateUrl: 'app/channels/channels.component.html',
            providers: [channels_service_1.ChannelsService],
            pipes: [TimeAgoPipe_1.TimeAgoPipe, orderBy_1.OrderBy]
        }), 
        __metadata('design:paramtypes', [channels_service_1.ChannelsService])
    ], ChannelsComponent);
    return ChannelsComponent;
}());
exports.ChannelsComponent = ChannelsComponent;
//# sourceMappingURL=channels.component.js.map