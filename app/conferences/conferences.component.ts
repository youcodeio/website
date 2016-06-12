import { Component, OnInit } from '@angular/core';

import { Conferences } from './conferences';
import { ConferencesService } from './conferences.service';

@Component({
    selector: 'conferences',
    templateUrl: 'app/conferences/conferences.component.html',
    providers: [ConferencesService]
})
export class ConferencesComponent implements OnInit {
    conferences: Conferences[];  
    
    constructor(private _conferencesService: ConferencesService) {}
    
    ngOnInit() {
        this._conferencesService.getConferences().then(conferences => this.conferences = conferences);
    }
}