import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public ran: number[] = [];
    private max: number = 0;
    public maxExtra: number = 0;
    public lastSelection: string = '';
    public extra:number = 0;
    public setCount:number = 5;

    public makeNumbers(selection:string): void {
        this.lastSelection = selection;
        switch (selection) {
            case 'mega':
                this.max = 70;
                this.maxExtra = 25;
                this.setCount = 5;
                break;
            case 'power':
                this.max = 69;
                this.maxExtra = 26;
                this.setCount = 5;
                break;
            case 'texastwostep':
                this.max = 35;
                this.maxExtra = 35;
                this.setCount = 4;
                break;
            case 'ball54':
                this.max = 54;
                this.maxExtra = 0;
                this.setCount = 6;
                break;
            default: this.max = NaN;
        }

        this.ran = [];
        if (this.max) {
            this.extra = Math.floor(Math.random() * this.maxExtra) + 1;
            do {
                let randomNumber = Math.floor(Math.random() * this.max) + 1;
                if (this.ran.indexOf(randomNumber)===-1) {
                    this.ran.push(randomNumber);
                }
            } while (this.ran.length<this.setCount);

            this.ran = this.ran.sort((a:Number, b:Number) => {
                if (a>b) return 1;
                else if (b>a) return -1;
                else return 0;
            });
        }
    }

    public getClass(): string {
        let colorClass:string = '';
        switch (this.lastSelection) {
            case 'mega': colorClass = 'red'; break;
            case 'power': colorClass = 'blue'; break;
            case 'texastwostep': colorClass = 'green'; break;
            case 'ball54': colorClass = 'orange'; break;
        }
        return colorClass;
    }
}
