import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: 'app-home',
    template: `
    <div style="
        text-align: left;
        margin: 45px 0px 0px 50px;
    ">
        <h3>
            Welcome to the MVLib Testing Ground
        </h3>
        <p>
            This is a test application for the MVLib library. It is used to test its components and their functionalities.<br/>
            Choose a component from the header to see the examples and test the components styles, effects and settings.<br/>
            The project is still in its early stages, so you may encounter some bugs or missing features.<br/>
            I am actively working on fixing issues and adding new functionality.<br/>
        </p>
        <p style="color: red">
            I am currently refactoring the library's styles and effects.<br/>
            Dropdown is not working properly, and the lite version of the switch is broken.<br/>
        </p>
    </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class HomeComponent {
    
}