import { Directive, OnInit, signal } from "@angular/core";

@Directive()
export abstract class BaseExampleComponent<
    Settings,
    Effects extends { [K in keyof Effects]: unknown[] }
> implements OnInit {

    protected settings = signal<Partial<Settings>>({});
    protected effects = signal<Partial<Effects>>({});
    protected disabled = signal(false);
    protected lastInteractionTime = signal<string>('00:00:00.00');
    protected log = signal('');

    ngOnInit() {
        this.refreshLog();
    }

    protected updateSetting(
        key: keyof Settings,
        event: any,
    ) {
        const target = event.target as HTMLInputElement | null;
        this.settings.update(current => ({
            ...current,
            [key]: target?.type === 'number'
                ? Number.isNaN(target.valueAsNumber) ? undefined : target.valueAsNumber
                : target?.value,
        }));
        this.refreshLog();
    }

    protected updateEffect<Type extends keyof Effects>(
        type: Type,
        effect: Effects[Type][number],
        event: any,
    ) {
        this.effects.update(current => {
            const currentValues = (current[type] ?? []) as Effects[Type];
            return {
                ...current,
                [type]: event.target.checked
                    ? [...currentValues, effect]
                    : currentValues.filter(e => e !== effect),
            } as Partial<Effects>;
        });
        this.refreshLog();
    }

    protected refreshLog() {
        this.log.set(`
Last interacted at ${this.lastInteractionTime()}\n
[disabled]=\"${this.disabled()}\",
[settings]=\"${this.prettify(this.settings())}\",
[effects]=\"${this.prettify(this.effects())}\"
        `);
    }

    protected setLastInteractionTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const centiseconds = String(Math.floor(now.getMilliseconds() / 10)).padStart(2, '0');
        this.lastInteractionTime.set(`${hours}:${minutes}:${seconds}.${centiseconds}`);
        this.refreshLog();
    }

    protected prettify(object: any): string {
        return JSON.stringify(object, null, 4)
            .replace(/"([^\"]+)":/g, '$1:')
            .replace(/"/g, "'");
    }
}