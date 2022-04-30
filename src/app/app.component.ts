import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public ran: number[] = [];
    private max: number = 0;
    private maxExtra: number = 0;
    public lastSelection: string = '';
    public extra:number = 0;

    public makeNumbers(selection:string): void {
        this.lastSelection = selection;
        switch (selection) {
            case 'mega':
                this.max = 70;
                this.maxExtra = 25;
                break;
            case 'power':
                this.max = 69;
                this.maxExtra = 26;
                break;
            case 'texastwostep':
                this.max = 35;
                this.maxExtra = 35;
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
            } while (this.ran.length<(this.lastSelection === 'texastwostep' ? 4 : 5));

            this.ran = this.ran.sort((a:Number, b:Number) => {
                if (a>b) return 1;
                else if (b>a) return -1;
                else return 0;
            });
        }


    }
}
