import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';



@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']

})

export class HomepageComponent implements OnInit {
    @Input() title: string;
    homeFinished: boolean;
    @Output() onHomeFinished: EventEmitter<boolean>;

    finishHome() {
        this.homeFinished = true;
        this.onHomeFinished.emit(this.homeFinished);
    }

    ngOnInit(): void {
    }

}


