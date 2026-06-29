import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  computed,
  Component,
  ElementRef,
  HostListener,
  inject,
  input,
  OnInit,
  output,
  signal,
  viewChild,
  contentChild,
} from "@angular/core";
import { MvLibDropdownClassicSettings } from "./dropdown-classic.settings";
import { MvLibDropdownItemTemplateDirective, MvLibDropdownSelectedTemplateDirective } from "../dropdown.directives";

export interface MvLibDropdownClassicClickEvent {
  readonly selectedItem: any;
  readonly event: Readonly<Event>;
}

@Component({
  selector: 'mv-lib-dropdown-classic',
  imports: [CommonModule],
  templateUrl: './dropdown-classic.component.html',
  styleUrl: './dropdown-classic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MvLibDropdownClassicComponent<T> implements OnInit {

  private hostElement = inject(ElementRef<HTMLElement>);
  private dropdownRoot = viewChild<ElementRef<HTMLElement>>("dropdownRoot");
  private dropdownButton = viewChild<ElementRef<HTMLButtonElement>>("dropdownButton");

  protected selectedTemplate = contentChild(MvLibDropdownSelectedTemplateDirective<T>);
  protected itemTemplate = contentChild(MvLibDropdownItemTemplateDirective<T>);

  public items = input<T[]>([]);
  public selectedItem = input<T | undefined>(undefined);
  public settings = input<Partial<MvLibDropdownClassicSettings>>();

  public onSelect = output<MvLibDropdownClassicClickEvent>();

  protected isOpen = signal(false);
  protected selectedItemInternal = signal<T | undefined>(undefined);

  protected computedSettings = computed(() => new MvLibDropdownClassicSettings(this.settings()));
  protected computedSelectedItem = computed(() => this.selectedItem() ?? this.selectedItemInternal());

  ngOnInit() {
    this.initializeAutoWidth();
  }

  private initializeAutoWidth(): void {
    requestAnimationFrame(() => {
      const computedSettings = this.computedSettings();
      if (computedSettings.widthPx !== undefined) {
        return;
      }
      const width = this.dropdownButton()?.nativeElement.getBoundingClientRect().width ?? 0;
      if (width > 0) {
        computedSettings.widthPx = Math.ceil(width);
      }
    });
  }

  protected selectItem(item: T, event: Event): void {
    this.selectedItemInternal.set(item);
    if (this.computedSettings().autoCloseAfterSelect) {
      this.isOpen.set(false);
    }
    this.onSelect.emit({
      selectedItem: item,
      event: event,
    });
  }

  // protected isSelected(item: T): boolean {
  //   return Object.is(this.computedSelectedItem(), item);
  // }

  @HostListener('document:click', ['$event'])
  protected onDocumentClick(event: Event): void {
    const target = event.target as Node | null;
    const rootElement = this.dropdownRoot()?.nativeElement ?? this.hostElement.nativeElement;
    if (target && !rootElement.contains(target)) {
      this.isOpen.set(false);
    }
  }
}