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
var router_deprecated_1 = require('@angular/router-deprecated');
var search_service_1 = require('./search.service');
var TimeAgoPipe_js_1 = require('angular2-moment/TimeAgoPipe.js');
var ng2_pagination_1 = require('ng2-pagination');
var SearchComponent = (function () {
    function SearchComponent(_searchService, _routeParams) {
        var _this = this;
        this._searchService = _searchService;
        this._routeParams = _routeParams;
        this.errorMessage = false;
        this.loading = true;
        //text
        this.talks = "Talks";
        this.tutorials = "Tutorials";
        this.config = {
            id: 'custom',
            itemsPerPage: 6,
            currentPage: 1
        };
        this.query = decodeURIComponent(this._routeParams.get('query'));
        this.type = this._routeParams.get('type');
        this._searchService.getSearch(this.query, this.type)
            .subscribe(function (search) { return _this.search = search; }, function (error) { return _this.errorMessage = true; }, function () { return _this.loading = false; });
    }
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search',
            templateUrl: 'app/home/search/search.component.html',
            providers: [search_service_1.SearchService, ng2_pagination_1.PaginationService],
            directives: [ng2_pagination_1.PaginationControlsCmp],
            pipes: [TimeAgoPipe_js_1.TimeAgoPipe, ng2_pagination_1.PaginatePipe]
        }), 
        __metadata('design:paramtypes', [search_service_1.SearchService, router_deprecated_1.RouteParams])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map