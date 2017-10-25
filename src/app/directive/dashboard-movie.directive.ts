import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[dashboardMovieDirective]'
})
export class DashboardMovieDirective {
    constructor (el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'lightgray';
        el.nativeElement.style.fontStyle = 'italic';
        el.nativeElement.style.fontWeight = 'bold';
    }
}