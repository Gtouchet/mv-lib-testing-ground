import { ChangeDetectionStrategy, Component, input, output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GENERIC_INPUTS } from "../../generic-inputs/_generic-inputs.export";

@Component({
  selector: 'app-dimensions-inputs',
  imports: [
    CommonModule,
    GENERIC_INPUTS,
  ],
  templateUrl: './dimensions-inputs.component.html',
  styleUrls: [
    './dimensions-inputs.component.scss',
    '../group-inputs.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DimensionsInputsComponent {

    public width = input<string>();
    public minWidth = input<string>();
    public maxWidth = input<string>()
    public height = input<string>();
    public minHeight = input<string>();
    public maxHeight = input<string>();

    public onWidthChange = output<string>();
    public onMinWidthChange = output<string>();
    public onMaxWidthChange = output<string>();
    public onHeightChange = output<string>();
    public onMinHeightChange = output<string>();
    public onMaxHeightChange = output<string>();
}