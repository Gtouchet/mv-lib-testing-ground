import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class StylesService {

    private computedStyle: CSSStyleDeclaration = getComputedStyle(document.documentElement);

    public var = (variable: string): string => this.computedStyle.getPropertyValue(`--${variable}`);
}