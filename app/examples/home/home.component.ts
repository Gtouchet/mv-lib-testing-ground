import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: 'app-home',
    template: `
        <h3>
            Welcome to the MvLib Testing Ground
        </h3>
        <p>
            This is a test application for the MvLib library. It is used to test it's components and their functionalities.<br/>
            Choose a component from the header to see the examples and test the components styles, effects and settings.<br/>
            The project is still in its early stages, so you may encounter some bugs or missing features.<br/>
            I am actively working on fixing issues and adding new functionality.<br/>
        </p>
        <p style='color: red'>
            I am currently refactoring the library's styles and effects, so most component are broken.<br/>
            The button and textbox components are the only ones that are fully refactored.
        </p>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class HomeComponent {
    
}