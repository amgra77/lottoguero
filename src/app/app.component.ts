import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'lottoguero';
    public ran: Number[] = [];
    constructor() {
        do {
            let randomNumber = Math.floor(Math.random() * 70); 
            if (this.ran.indexOf(randomNumber)===-1) this.ran.push(randomNumber);
        } while (this.ran.length<5);
        this.ran = this.ran.sort((a:Number, b:Number) => {
            if (a>b) return 1;
            else if (b>a) return -1;
            else return 0;
        });
    }
}
