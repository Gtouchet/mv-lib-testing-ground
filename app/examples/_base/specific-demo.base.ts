import { Directive, signal } from "@angular/core";
import { MvLibButtonEffects, MvLibButtonStyle } from "mv-lib";
import { DemoBaseComponent } from "./demo.base";
import { APP_ROUTES } from "../../app.routes";

type DemoLog = {
    code?: Code[];
    event?: Event[];
}

type Code = {
    property: string;
    value: (() => unknown) | unknown;
}

type Event = {
    index: number;
    event: string;
}

@Directive({
    standalone: true,
})
export abstract class SpecificDemoBaseComponent extends DemoBaseComponent {

    protected numericTetxboxNavigation = [
        { label: 'Overview', goTo: APP_ROUTES.textboxNumericOverview },
        { label: 'Style', goTo: APP_ROUTES.textboxNumericStyle },
        { label: 'Effects', goTo: APP_ROUTES.textboxNumericEffects },
        { label: 'Settings', goTo: APP_ROUTES.textboxNumericSettings },
        { label: 'Form', goTo: APP_ROUTES.textboxNumericForm },
        { label: 'Events', goTo: APP_ROUTES.textboxNumericEvents },
    ];

    protected selectionButton: {
        style: Partial<MvLibButtonStyle>,
        effects: Partial<MvLibButtonEffects>,
    } = {
        style: {
            dimensions: {
                width: '100%',
                height: '24px',
            },
        },
        effects: {
            classes: [
                this.mvLibEffects.hover.tint.class,
                this.mvLibEffects.click.push.class,
            ],
        },
    };

    protected copyButton: {
        style: Partial<MvLibButtonStyle>,
        effects: Partial<MvLibButtonEffects>,
    } = {
        style: {
            dimensions: {
                width: '33%',
                height: '24px',
            },
        },
        effects: {
            classes: [
                this.mvLibEffects.hover.tint.class,
                this.mvLibEffects.click.push.class,
            ],
        },
    };
    
    constructor() {
        super();
    }

    /**
     * Logs
     */
    protected logs = signal<Record<string, DemoLog>>({});

    protected refreshLog(key: string) {
        this.logs.update(logs => ({
            ...logs,
            [key]: { ...logs[key] },
        }));
    }

    protected componentCode(key: string) {
        let result = `\n`;
        const properties = this.logs()[key]?.code ?? [];
        properties.forEach(property => {
            const value = typeof property.value === 'function'
                ? property.value()
                : property.value;
            const formattedValue = value === undefined
                ? 'undefined'
                : `"${this.prettify(value)}"`;
            result += `    [${property.property}]=${formattedValue},\n`;
        });
        return result;
    }

    protected refreshLogs() {
        Object.keys(this.logs()).forEach(key => this.refreshLog(key));
    }

    protected events(key: string) {
        const logs = this.logs();
        return key in logs ? logs[key].event : [];
    }

    protected addEventLog(key: string, event: string) {
        this.logs.update(logs => {
            const log = logs[key];
            const events = log?.event ?? [];
            return {
                ...logs,
                [key]: {
                    ...log,
                    event: [{ index: events.length + 1, event }, ...events],
                },
            };
        });
    }

    protected copyComponentCode(key: string) {
        const componentCode = (this.logs()[key]?.code ?? [])
            .map(property => {
                const value = typeof property.value === 'function'
                    ? property.value()
                    : property.value;
                const lines = this.prettify(value).split('\n');

                return lines.length > 1
                    ? lines.slice(1, -1).map(line => line.slice(4)).join('\n')
                    : lines[0];
            })
            .join('\n');

        navigator.clipboard.writeText(componentCode)
            .then(() =>
                this.toastService.success(
                    'Copied component code',
                    'content_copy',
                    { width: '250px' },
                )
            )
            .catch(() =>
                this.toastService.error(
                    'Failed to copy component code',
                    'error',
                    { width: '300px' },
                )
            );
    }
}