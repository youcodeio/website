import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core';
import { AppComponent } from './app.component';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { LocationStrategy, Location, HashLocationStrategy } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';

bootstrap(AppComponent, [ ROUTER_PROVIDERS, HTTP_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy}) ]);