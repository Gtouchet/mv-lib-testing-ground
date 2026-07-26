import { ChangeDetectionStrategy, Component, input, output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GENERIC_INPUTS } from "../../generic-inputs/_generic-inputs.export";

@Component({
  selector: 'app-outline-solid-selected-inputs',
  imports: [
    CommonModule,
    GENERIC_INPUTS,
  ],
  templateUrl: './outline-solid-selected-inputs.component.html',
  styleUrls: [
    './outline-solid-selected-inputs.component.scss',
    '../effect-inputs.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class OutlineSolidSelectedInputsComponent {

    public enabled = input<boolean>();
    public color = input<string>();
    public width = input<string>();

    public onEnabledChange = output<boolean>();
    public onColorChange = output<string>();
    public onWidthChange = output<string>();
}