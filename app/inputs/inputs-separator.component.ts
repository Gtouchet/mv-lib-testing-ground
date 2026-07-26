import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
    selector: 'app-inputs-separator',
    imports: [CommonModule],
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
                {{ label() }}
            </b>
            <hr
                [ngStyle]="{
                    'flex': '1',
                    'margin': '0',
                    'margin-right.px': 6,
                }"
            />
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class InputsSeparatorComponent {
    public label = input.required<string>();
}