import { Component, OnInit } from '@angular/core';

import { About } from './about';
import { AboutService } from './about.service';

@Component({
    selector: 'about',
    templateUrl: 'app/about/about.component.html',
    providers: [AboutService]
})
export class AboutComponent implements OnInit {
    about: About[];
    
    constructor(private _aboutService: AboutService) {}

    ngOnInit() {
        this._aboutService.getAbout().then(about => this.about = about);
    }
}