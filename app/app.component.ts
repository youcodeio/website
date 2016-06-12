import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ConferencesComponent } from './conferences/conferences.component';
import { ChannelsComponent } from './channels/channels.component';

declare var jQuery:JQueryStatic;

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {
        path: '/...',
        name: 'Home',
        component: HomeComponent
    },
    {
        path: '/about',
        name: 'About',
        component: AboutComponent,
    },
    {
        path: '/conferences',
        name: 'Conferences',
        component: ConferencesComponent
    },
    {
        path: '/channels',
        name: 'Channels',
        component: ChannelsComponent
    }
])

export class AppComponent implements AfterViewInit{
    home = 'Home';
    about = 'About';
    conferences = 'Conferences';
    channels = 'Channels';
    
    constructor(private el:ElementRef) {
    }
    
    ngAfterViewInit() {
        jQuery(this.el.nativeElement).find(".button-collapse").sideNav();
    }
}