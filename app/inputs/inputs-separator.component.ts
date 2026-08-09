import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
    selector: 'app-inputs-separator',
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    template: `
        <div
            [ngStyle]="{
                'display': 'flex',
                'align-items': 'center',
            }"
        >
            <hr
                [ngStyle]="{
                    'flex': '1',
                    'margin': '0',
                    'margin-right.px': 8,
                }"
            />
            <div style="position: relative; top: 2px;">
                <ng-content />
            </div>
            <b>
                {{ title() ?? 'Inputs Separator' }}
            </b>
            <hr
                [ngStyle]="{
                    'flex': '1',
                    'margin': '0',
                    'margin-left.px': 8,
                }"
            />
        </div>
    `,
    styles: [`
        :host {
            display: block;
            width: 100%;
        }
    `]
})
export class InputsSeparatorComponent {
    
    public title = input<string>();
}