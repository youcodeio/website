System.register(['angular2/core', './conferences.service'], function(exports_1, context_1) {
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
    var core_1, conferences_service_1;
    var ConferencesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (conferences_service_1_1) {
                conferences_service_1 = conferences_service_1_1;
            }],
        execute: function() {
            ConferencesComponent = (function () {
                function ConferencesComponent(_conferencesService) {
                    this._conferencesService = _conferencesService;
                }
                ConferencesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._conferencesService.getConferences().then(function (conferences) { return _this.conferences = conferences; });
                };
                ConferencesComponent = __decorate([
                    core_1.Component({
                        selector: 'conferences',
                        templateUrl: 'app/conferences/conferences.component.html',
                        providers: [conferences_service_1.ConferencesService]
                    }), 
                    __metadata('design:paramtypes', [conferences_service_1.ConferencesService])
                ], ConferencesComponent);
                return ConferencesComponent;
            }());
            exports_1("ConferencesComponent", ConferencesComponent);
        }
    }
});
//# sourceMappingURL=conferences.component.js.map