System.register(['angular2/core', 'angular2/router', './search.service', 'angular2-moment/TimeAgoPipe.js'], function(exports_1, context_1) {
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
    var core_1, router_1, search_service_1, TimeAgoPipe_js_1;
    var SearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (search_service_1_1) {
                search_service_1 = search_service_1_1;
            },
            function (TimeAgoPipe_js_1_1) {
                TimeAgoPipe_js_1 = TimeAgoPipe_js_1_1;
            }],
        execute: function() {
            SearchComponent = (function () {
                function SearchComponent(_searchService, _routeParams) {
                    var _this = this;
                    this._searchService = _searchService;
                    this._routeParams = _routeParams;
                    this.errorMessage = false;
                    this.loading = true;
                    //text
                    this.talks = "Talks";
                    this.tutorials = "Tutorials";
                    this.query = this._routeParams.get('query');
                    this.type = this._routeParams.get('type');
                    this._searchService.getSearch(this.query, this.type)
                        .subscribe(function (search) { return _this.search = search; }, function (error) { return _this.errorMessage = true; }, function () { return _this.loading = false; });
                }
                SearchComponent = __decorate([
                    core_1.Component({
                        selector: 'search',
                        templateUrl: 'app/home/search/search.component.html',
                        providers: [search_service_1.SearchService],
                        pipes: [TimeAgoPipe_js_1.TimeAgoPipe]
                    }), 
                    __metadata('design:paramtypes', [search_service_1.SearchService, router_1.RouteParams])
                ], SearchComponent);
                return SearchComponent;
            }());
            exports_1("SearchComponent", SearchComponent);
        }
    }
});
//# sourceMappingURL=search.component.js.map