import { Directive, ElementRef, model, signal, viewChild } from "@angular/core";
import { DemoBaseComponent } from "./demo.base";

@Directive({
    standalone: true,
})
export abstract class OverviewDemoBaseComponent extends DemoBaseComponent {

    protected selectedPartStyle = signal<string | undefined>(undefined);
    protected selectedPartEffects = signal<string | undefined>(undefined);
    protected selectedPartSettings = signal<string | undefined>(undefined);

    protected disabled = model(false);

    /**
     * Logs
     */
    protected lastInteractionTime = signal<string>('--:--:--.--');
    protected logProperties: { property: string, value: (() => any) | any }[] = [];
    protected log = signal('');

    protected refreshLastInteractionTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const centiseconds = String(Math.floor(now.getMilliseconds() / 10)).padStart(2, '0');
        this.lastInteractionTime.set(`${hours}:${minutes}:${seconds}.${centiseconds}`);
    }

    protected refreshLog() {
        var result = `\n`;
        this.logProperties.forEach(property => {
            const value = typeof property.value === 'function'
                ? property.value()
                : property.value;
            result += `    [${property.property}]="${this.prettify(value)}",\n`;
        });
        this.log.set(result);
    }

    /**
     * Copy component code to clipboard
     */
    protected code = viewChild.required<ElementRef<HTMLPreElement>>('code');
    protected copyComponentCode() {
        navigator.clipboard.writeText(this.code().nativeElement.innerText)
            .then(() =>
                this.toastService.success(
                    'Copied component code',
                    'content_copy',
                    { width: '250px' }
                )
            )
            .catch(() =>
                this.toastService.error(
                    'Failed to copy component code',
                    'error',
                    { width: '300px' }
                )
            );
    }
}