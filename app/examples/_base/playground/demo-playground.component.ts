import { ChangeDetectionStrategy, Component, input, output, signal } from "@angular/core";
import { MV_LIB_EFFECTS, MvLibButtonComponent, MvLibButtonEffects, MvLibButtonStyle } from "mv-lib";

@Component({
    selector: 'app-demo-playground',
    imports: [
        MvLibButtonComponent,
    ],
    templateUrl: './demo-playground.component.html',
    styleUrl: './demo-playground.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class DemoPlaygroundComponent {

    public code = input.required<string>();

    public configurationTitle = input('Configuration');
    public codeTitle = input('Code');
    public previewTitle = input('Preview');
    public copyLabel = input('Copy');

    public height = input('500px');

    public onCopy = output<void>();

    protected activeTab = signal<'configuration' | 'code'>('configuration');

    protected copyButtonStyle: Partial<MvLibButtonStyle> = {
        dimensions: {
            width: '110px',
            height: '24px',
        },
    };

    protected copyButtonEffects: Partial<MvLibButtonEffects> = {
        classes: [
            MV_LIB_EFFECTS.hover.tint.class,
            MV_LIB_EFFECTS.click.push.class,
        ],
    };
}
