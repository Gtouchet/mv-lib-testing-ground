import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: 'app-home',
    template: `
        This is a test application for the MvLib library. It is used to test the components and their functionalities.<br/>
        Choose a component from the header to see the examples and test the components styles, effects and settings.
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class HomeComponent {
    
}