import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
    selector: 'app-inputs-separator',
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    host: {
        style: 'flex: 1;',
    },
    template: `
        <div
            [ngStyle]="{
                'display': 'flex',
                'align-items': 'center',
                'gap.px': 8,
                'margin-bottom.px': 4,
            }"
        >
            <b>
                {{ title() ?? 'Inputs Separator' }}
            </b>
            <hr
                [ngStyle]="{
                    'flex': '1',
                    'margin': '0',
                }"
            />
        </div>
    `,
})
export class InputsSeparatorComponent {
    
    public title = input<string>();
}