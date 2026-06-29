import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  computed,
  Component,
  ElementRef,
  HostListener,
  inject,
  input,
  model,
  OnInit,
  output,
  viewChild,
  contentChild,
  signal,
  effect,
} from "@angular/core";
import { MvLibDropdownClassicSettings } from "./dropdown-classic.settings";
import { MvLibDropdownItemTemplateDirective, MvLibDropdownSelectedTemplateDirective } from "../dropdown.directives";
import { MvLibDropdownClassicEffects } from "./dropdown-classic.effects";

export interface MvLibDropdownClassicSelectEvent<T> {
  readonly selectedItem: T;
  readonly event: Readonly<Event>;
}

export interface MvLibDropdownClassicOpenEvent {
  readonly opened: boolean;
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

  protected selectedTemplate? = contentChild(MvLibDropdownSelectedTemplateDirective<T>);
  protected itemTemplate? = contentChild(MvLibDropdownItemTemplateDirective<T>);

  public settings = input<Partial<MvLibDropdownClassicSettings>>();
  public effects = input<Partial<MvLibDropdownClassicEffects>>();
  public items = input<T[]>([]);
  public disabled = input<boolean>(false);
  public opened = input<boolean>(false);

  public selectedItem = model<T | undefined>(undefined);

  public onSelect = output<MvLibDropdownClassicSelectEvent<T>>();
  public onOpen = output<MvLibDropdownClassicOpenEvent>();

  protected isOpen = signal(false);

  protected computedSettings = computed(() => new MvLibDropdownClassicSettings(this.settings()));
  protected computedEffects = computed(() => new MvLibDropdownClassicEffects(this.effects()));

  protected computedButtonClasses = computed(() => [
    'dropdown-button',
    ... this.computedEffects().idle,
    ... this.computedEffects().hover,
    ... this.computedEffects().click,
  ]);
  protected computedListClasses = computed(() => [
    'dropdown-list',
    ... this.computedEffects().idle,
    ... this.computedEffects().hover,
    ... this.computedEffects().click,
  ]);

  constructor() {
    effect(() => {
      if (this.disabled()) {
        this.isOpen.set(false);
      }
    });
    effect(() => {
      if (this.opened()) {
        this.isOpen.set(this.opened());
      }
    });
  }

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
    this.selectedItem.set(item);
    if (this.computedSettings().closeOnSelect) {
      this.isOpen.set(false);
    }
    this.onSelect.emit({
      selectedItem: item,
      event: event,
    });
  }

  // protected isSelected(item: T): boolean {
  //   return Object.is(this.selectedItem(), item);
  // }

  @HostListener('document:click', ['$event'])
  protected onDocumentClick(event: Event): void {
    if (!this.isOpen() || !this.computedSettings().closeOnOutsideClick) {
      return;
    }
    const target = event.target as Node | null;
    const rootElement = this.dropdownRoot()?.nativeElement ?? this.hostElement.nativeElement;
    if (target && !rootElement.contains(target)) {
      this.isOpen.set(false);
      this.onOpen.emit({
        opened: this.isOpen(),
        event: event,
      });
    }
  }
}