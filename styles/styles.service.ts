import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class StylesService {

    public styles: Record<string, string> = this.initStyles();

    public var(name: string) {
        return this.styles[name];
    }

    private initStyles(): Record<string, string> {
        const styles: Record<string, string> = {};
        const computedStyle: CSSStyleDeclaration = getComputedStyle(document.documentElement);
        for (let i = 0; i < computedStyle.length; i += 1) {
            const propertyName = computedStyle[i];
            if (propertyName.startsWith('--')) {
                const key = propertyName.replace('--', '');
                const value = computedStyle.getPropertyValue(propertyName).trim();
                styles[key] = value;
            }
        }
        return styles;
    }
}