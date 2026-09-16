import { Directive, signal } from "@angular/core";
import { MvLibButtonClassicEffects, MvLibButtonClassicStyle } from "mv-lib";
import { DemoBaseComponent } from "./demo.base";
import { appRoutes } from "../../app.routes";

type LogProperty = {
    property: string;
    value: (() => unknown) | unknown;
};

type EventLog<Event = unknown> = {
    index: number;
    event: Event;
};

@Directive({
    standalone: true,
})
export abstract class SpecificDemoBaseComponent extends DemoBaseComponent {

    protected numericTetxboxNavigation = [
        { label: 'Overview', goTo: appRoutes.TextboxNumericOverview },
        { label: 'Style', goTo: appRoutes.TextboxNumericStyle },
        { label: 'Effects', goTo: appRoutes.TextboxNumericEffects },
        { label: 'Settings', goTo: appRoutes.TextboxNumericSettings },
        { label: 'Form', goTo: appRoutes.TextboxNumericForm },
        { label: 'Events', goTo: appRoutes.TextboxNumericEvents },
    ];

    protected selectionButton: {
        style: Partial<MvLibButtonClassicStyle>,
        effects: Partial<MvLibButtonClassicEffects>
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
        style: Partial<MvLibButtonClassicStyle>,
        effects: Partial<MvLibButtonClassicEffects>
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

    /**
     * Log
     */
    protected logProperties: Record<string, LogProperty[]> = {};
    protected logs = signal<Record<string, string>>({});

    protected refreshLog(key: string) {
        let result = `\n`;
        const properties = this.logProperties[key] ?? [];

        properties.forEach(property => {
            const value = typeof property.value === 'function'
                ? property.value()
                : property.value;
            result += `    [${property.property}]="${this.prettify(value)}",\n`;
        });

        this.logs.update(logs => ({ ...logs, [key]: result }));
    }

    protected refreshLogs() {
        Object.keys(this.logProperties).forEach(key => this.refreshLog(key));
    }

    /**
     * Copy component code to clipboard
     */
    protected copyComponentCode(key: string) {
        const componentCode = (this.logProperties[key] ?? [])
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

    /**
     * Events
     */
    protected eventLogs = signal<Record<string, EventLog[]>>({});

    protected addEventLog<Event>(type: string, event: Event) {
        this.eventLogs.update(eventLogs => {
            const logs = eventLogs[type] ?? [];

            return {
                ...eventLogs,
                [type]: [
                    { index: logs.length + 1, event },
                    ...logs,
                ],
            };
        });
    }
}