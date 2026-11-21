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
                    'margin-right.px': label() ? 8 : 0,
                }"
            />
            <div style="position: relative; top: 2px;">
                <ng-content />
            </div>
            @if (label()) {
                <b>
                    {{ label() }}
                </b>
                <div class="separator-end">
                    <ng-content select="[separatorEnd]" />
                </div>
                <hr
                    [ngStyle]="{
                        'flex': '1',
                        'margin': '0',
                        'margin-left.px': 8,
                    }"
                />
            }
        </div>
    `,
    styles: [`
        :host {
            display: block;
            width: 100%;
        }

        .separator-end {
            display: flex;
            align-items: center;
            margin-left: 8px;
        }

        .separator-end:empty {
            display: none;
        }
    `]
})
export class InputsSeparatorComponent {
    
    public label = input<string | undefined>(undefined);
}