System.register(['angular2/core', './channels.service', 'angular2-moment/TimeAgoPipe.js'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, channels_service_1, TimeAgoPipe_js_1;
    var ChannelsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (channels_service_1_1) {
                channels_service_1 = channels_service_1_1;
            },
            function (TimeAgoPipe_js_1_1) {
                TimeAgoPipe_js_1 = TimeAgoPipe_js_1_1;
            }],
        execute: function() {
            ChannelsComponent = (function () {
                function ChannelsComponent(_channelsService) {
                    var _this = this;
                    this._channelsService = _channelsService;
                    this.loading = true;
                    this._channelsService.getChannels()
                        .subscribe(function (channels) { return _this.channels = channels; }, function (error) { return _this.errorMessage = true; }, function () { return _this.loading = false; });
                    this._channelsService.getChannels()
                        .subscribe(function (channels) { return _this.selectedChannel = channels[0]; }, function (error) { return _this.errorMessage = true; }, function () { return _this.getVideoSelected(); });
                }
                ChannelsComponent.prototype.getVideoSelected = function () {
                    var _this = this;
                    this._channelsService.getVideo(this.selectedChannel.ytid)
                        .subscribe(function (video) { return _this.video = video; }, function (error) { return _this.errorMessage = true; });
                };
                ChannelsComponent.prototype.onSelect = function (channel) {
                    this.selectedChannel = channel;
                    this.getVideoSelected();
                };
                ChannelsComponent = __decorate([
                    core_1.Component({
                        selector: 'channels',
                        templateUrl: 'app/channels/channels.component.html',
                        providers: [channels_service_1.ChannelsService],
                        pipes: [TimeAgoPipe_js_1.TimeAgoPipe]
                    }), 
                    __metadata('design:paramtypes', [channels_service_1.ChannelsService])
                ], ChannelsComponent);
                return ChannelsComponent;
            }());
            exports_1("ChannelsComponent", ChannelsComponent);
        }
    }
});
//# sourceMappingURL=channels.component.js.map