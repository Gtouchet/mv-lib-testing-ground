import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
    selector: 'app-configuration-section',
    styleUrl: './configuration-section.component.scss',
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    template: `
        <div class="configuration-section">
            <div class="configuration-title">
                {{ title() }}
                <div class="configuration-buttons">
                    <ng-content select="[buttons]" />
                </div>
            </div>
            <div class="configuration-content">
                <ng-content />
            </div>
        </div>
    `,
})
export class ConfigurationSectionComponent {
    public title = input();
}