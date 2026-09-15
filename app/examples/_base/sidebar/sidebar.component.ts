import { CommonModule, DOCUMENT } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, input } from "@angular/core";

@Component({
    selector: 'app-specific-demo-sidebar',
    imports: [CommonModule],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class SpecificDemoSidebarComponent {
    private readonly document = inject(DOCUMENT);

    public contents = input<{
        separator?: boolean;
        label?: string;
        goto?: string;
    }[]>([]);

    protected scrollTo(targetId: string, event?: MouseEvent): void {
        event?.preventDefault();
        this.document.getElementById(targetId)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
}