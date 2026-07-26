import { Component, ChangeDetectionStrategy } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-effect-styles-inputs',
  imports: [CommonModule],
  template: `
  <div class="inputs-group">
    <ng-content/>
  </div>
  `,
  styleUrls: [
    './effect-styles-inputs.component.scss',
    '../group-inputs.component.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class EffectStylesInputsComponent {

}