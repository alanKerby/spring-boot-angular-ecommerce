import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']

})

export class HomepageComponent {
    @Input() title: string;
}


