import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ConferencesComponent } from './conferences/conferences.component';
import { ChannelsComponent } from './channels/channels.component';

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

export class AppComponent {
    home = 'Home';
    about = 'About';
    conferences = 'Conferences';
    channels = 'Channels';
}