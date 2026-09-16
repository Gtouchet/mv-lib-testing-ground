import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, input } from "@angular/core";
import { Router } from "@angular/router";
import { AppRoute } from "../../../app.routes";

@Component({
    selector: 'app-navigation',
    imports: [CommonModule],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class NavigationComponent {

    protected router = inject(Router);
    
    public links = input<{
        label: string;
        goTo: AppRoute;
    }[]>([]);

    protected goTo(link: string) {
        this.router.navigate([link]);
    }
}