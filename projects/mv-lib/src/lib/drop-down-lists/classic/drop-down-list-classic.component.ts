import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  computed,
  Component,
  ContentChild,
  input,
  output,
} from "@angular/core";
import { MvLibDropDownListTemplateDirective } from "../drop-down-list-classic-template.directive";
import { MvLibDropDownListClassicSettings } from "./drop-down-list-classic.settings";

export interface MvLibDropDownListClassicClickEvent {
  readonly selectedItem: any;
  readonly event: Readonly<Event>;
}

@Component({
  selector: 'mv-lib-drop-down-list-classic',
  imports: [CommonModule],
  templateUrl: './drop-down-list-classic.component.html',
  styleUrl: './drop-down-list-classic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MvLibDropDownListClassicComponent<T> {

  @ContentChild(MvLibDropDownListTemplateDirective)
  public itemTemplate?: MvLibDropDownListTemplateDirective<T>;

  public data = input<T[]>([]);
  public selectedItem = input<T | undefined>(undefined);
  public settings = input<Partial<MvLibDropDownListClassicSettings>>();

  public onSelect = output<MvLibDropDownListClassicClickEvent>();

  protected computedSettings = computed(() => new MvLibDropDownListClassicSettings(this.settings()));

  protected onSelectionChange(event: Event): void {
    const select = event.target as HTMLSelectElement | null;
    const selectedIndex = select?.selectedIndex ?? 0;
    const selected = selectedIndex > 0 ? this.data()[selectedIndex - 1] : undefined;
    this.onSelect.emit({
      selectedItem: selected,
      event: event,
    });
  }
}