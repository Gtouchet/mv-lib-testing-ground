import { ChangeDetectionStrategy, Component, signal, WritableSignal } from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";
import { MV_LIB_EFFECTS, MvLibCardComponent } from "mv-lib";

interface ChangelogEntry {
    version: string;
    date: string;
    changes: string[];
}

interface ChangelogChange {
    scope?: string;
    text: string;
}

interface ChangelogView {
    version: string;
    date: string;
    changes: ChangelogChange[];
}

@Component({
    selector: 'app-home',
    imports: [
        MvLibCardComponent,
        NgTemplateOutlet,
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class HomeComponent {
    protected readonly mvLibEffects = MV_LIB_EFFECTS;

    protected readonly features = [
        {
            icon: 'menu_open',
            title: 'Get started',
            text: 'Choose a component or a service from the left menu to see its examples.',
        },
        {
            icon: 'tune',
            title: 'Play with the configuration',
            text: 'Test the components styles, effects and settings live, then copy the generated code.',
        },
        {
            icon: 'construction',
            title: 'Work in progress',
            text: 'The project is still in its early stages: you may encounter bugs or missing features. Fixes and new components are added regularly.',
        },
    ];

    protected libraryChangelog = signal<ChangelogView[]>([]);
    protected testingGroundChangelog = signal<ChangelogView[]>([]);

    constructor() {
        this.loadChangelog('./changelogs/library-changelog.json', this.libraryChangelog);
        this.loadChangelog('./changelogs/testing-ground-changelog.json', this.testingGroundChangelog);
    }

    private async loadChangelog(
        path: string,
        changelog: WritableSignal<ChangelogView[]>,
    ): Promise<void> {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error(`Unable to load changelog: ${path} (${response.status})`);
        }
        const entries = await response.json() as ChangelogEntry[];
        changelog.set(entries.map(entry => ({
            version: entry.version,
            date: entry.date,
            changes: entry.changes.map(change => this.parseChange(change)),
        })));
    }

    private parseChange(change: string): ChangelogChange {
        const separatorIndex = change.indexOf(': ');
        if (separatorIndex === -1) {
            return { text: change };
        }
        return {
            scope: change.slice(0, separatorIndex),
            text: change.slice(separatorIndex + 2),
        };
    }
}
