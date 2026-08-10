import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    selector: 'app-home',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    template: `
    <div style="
        text-align: left;
        margin: 45px 0px 0px 50px;
    ">
        <h3>
            Welcome to the MVLib Testing Ground
        </h3>
        <br/>
        <p>
            This is a test application for the MVLib library.<br/>
            It is used to test its components and their functionalities.<br/><br/>
            The project is still in its early stages, so you may encounter some bugs or missing features.<br/>
            I am actively working on fixing issues and adding new components and features.<br/><br/>
            Choose a component or a service from the left menu to see the examples and test the components styles, effects and settings.<br/>
        </p>
    </div>
    `,
})
export class HomeComponent {
    
}