import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

interface ChangelogEntry {
    version: string;
    changes: string[];
}

@Component({
    selector: 'app-home',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    styles: `
        :host {
            display: block;
            height: 100%;
            overflow-y: auto;
            box-sizing: border-box;
        }
    `,
    template: `
    <div style="
        text-align: left;
        margin: 45px 0px 0px 50px;
    ">
        <h3>
            Welcome to the MVLib Testing Ground
        </h3>
        <br/>
        <p>
            This is a test application for the MVLib library.<br/>
            It is used to test its components and their functionalities.<br/><br/>
            The project is still in its early stages, so you may encounter some bugs or missing features.<br/>
            I am actively working on fixing issues and adding new components and features.<br/><br/>
            Choose a component or a service from the left menu to see the examples and test the components styles, effects and settings.<br/>
        </p>
        <br/>
        <div style="
            display: flex;
            width: 100%;
        ">
            <section style="width: 50%">
                <h4>Library changelog</h4>
                <ul style="display: flex; flex-direction: column; gap: 10px;">
                    @for (entry of libraryChangelog(); track entry) {
                        <li>
                            <strong>{{ entry.version }}</strong>
                            <ul>
                                @for (change of entry.changes; track change) {
                                    <li>{{ change }}</li>
                                }
                            </ul>
                        </li>
                    }
                </ul>
            </section>
            
            <section style="width: 50%">
                <h4>Testing Ground changelog</h4>
                <ul style="display: flex; flex-direction: column; gap: 10px;">
                    @for (entry of testingGroundChangelog(); track entry) {
                        <li>
                            <strong>{{ entry.version }}</strong>
                            <ul>
                                @for (change of entry.changes; track change) {
                                    <li>{{ change }}</li>
                                }
                            </ul>
                        </li>
                    }
                </ul>
            </section>
        </div>
    </div>
    `,
})
export class HomeComponent {
    protected libraryChangelog = signal<ChangelogEntry[]>([]);
    protected testingGroundChangelog = signal<ChangelogEntry[]>([]);

    constructor() {
        this.loadChangelog('./changelogs/library-changelog.json', this.libraryChangelog);
        this.loadChangelog('./changelogs/testing-ground-changelog.json', this.testingGroundChangelog);
    }

    private async loadChangelog(
        path: string,
        changelog: ReturnType<typeof signal<ChangelogEntry[]>>,
    ): Promise<void> {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error(`Unable to load changelog: ${path} (${response.status})`);
        }
        changelog.set(await response.json() as ChangelogEntry[]);
    }
}