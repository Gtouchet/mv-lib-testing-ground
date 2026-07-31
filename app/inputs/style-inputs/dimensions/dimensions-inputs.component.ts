import { ChangeDetectionStrategy, Component, computed, input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GENERIC_INPUTS } from "../../generic-inputs.export";
import { InputsSeparatorComponent } from "../../inputs-separator.component";
import { BaseExampleComponent } from "../../../examples/base-example.component";

@Component({
  selector: 'app-dimensions-inputs',
  imports: [
    CommonModule,
    InputsSeparatorComponent,
    GENERIC_INPUTS,
  ],
  templateUrl: './dimensions-inputs.component.html',
  styleUrl: '../style-inputs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DimensionsInputsComponent<Component extends BaseExampleComponent> {

  public component = input.required<Component>();
  public part = input<string | undefined>(undefined);
  public dimensions = input<string>('dimensions');

  public title = input<string | undefined>(undefined);

  protected styles = computed(() => this.component().styles() as any);

  protected width = computed(() => {
    return this.part() ?
      this.styles()[this.part()!][this.dimensions()].width :
      this.styles()[this.dimensions()].width;
  });
  
  protected minWidth = computed(() => {
    return this.part() ?
      this.styles()[this.part()!][this.dimensions()].minWidth :
      this.styles()[this.dimensions()].minWidth;
  });

  protected maxWidth = computed(() => {
    return this.part() ?
      this.styles()[this.part()!][this.dimensions()].maxWidth :
      this.styles()[this.dimensions()].maxWidth;
  });

  protected height = computed(() => {
    return this.part() ?
      this.styles()[this.part()!][this.dimensions()].height :
      this.styles()[this.dimensions()].height;
  });

  protected minHeight = computed(() => {
    return this.part() ?
      this.styles()[this.part()!][this.dimensions()].minHeight :
      this.styles()[this.dimensions()].minHeight;
  });
  protected maxHeight = computed(() => {
    return this.part() ?
      this.styles()[this.part()!][this.dimensions()].maxHeight :
      this.styles()[this.dimensions()].maxHeight;
  });
  
  protected onChangeWidth(value: string) {
    this.component().setStyle(`${this.part() ? this.part() + '.' : ''}${this.dimensions()}.width`, value);
  }

  protected onChangeMinWidth(value: string) {
    this.component().setStyle(`${this.part() ? this.part() + '.' : ''}${this.dimensions()}.minWidth`, value);
  }
  
  protected onChangeMaxWidth(value: string) {
    this.component().setStyle(`${this.part() ? this.part() + '.' : ''}${this.dimensions()}.maxWidth`, value);
  }

  protected onChangeHeight(value: string) {
    this.component().setStyle(`${this.part() ? this.part() + '.' : ''}${this.dimensions()}.height`, value);
  }

  protected onChangeMinHeight(value: string) {
    this.component().setStyle(`${this.part() ? this.part() + '.' : ''}${this.dimensions()}.minHeight`, value);
  }

  protected onChangeMaxHeight(value: string) {
    this.component().setStyle(`${this.part() ? this.part() + '.' : ''}${this.dimensions()}.maxHeight`, value);
  }
}