import {bootstrap} from 'angular2/platform/browser';
import {bind} from 'angular2/core';
import {AppComponent} from './app.component';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';

bootstrap(AppComponent, [ ROUTER_PROVIDERS, HTTP_PROVIDERS, bind(LocationStrategy).toClass(HashLocationStrategy) ] );