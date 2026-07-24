import { Component, ChangeDetectionStrategy } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-effect-styles-inputs',
  imports: [CommonModule],
  templateUrl: './effect-styles-inputs.component.html',
  styleUrl: './effect-styles-inputs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class EffectStylesInputsComponent {

}