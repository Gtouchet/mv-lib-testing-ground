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
import { MvLibDropdownClassicEffects } from "./dropdown-classic.effects";
import { MvLibDropdownClassicStyles } from "./dropdown-classic.styles";
import { MvLibDropdownItemTemplateDirective, MvLibDropdownPlaceholderTemplateDirective, MvLibDropdownSelectedTemplateDirective } from "../dropdown.directives";

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

  protected placeholderTemplate = contentChild(MvLibDropdownPlaceholderTemplateDirective);
  protected selectedTemplate = contentChild(MvLibDropdownSelectedTemplateDirective<T>);
  protected itemTemplate = contentChild(MvLibDropdownItemTemplateDirective<T>);

  public styles = input<Partial<MvLibDropdownClassicStyles>>();
  public effects = input<Partial<MvLibDropdownClassicEffects>>();
  public settings = input<Partial<MvLibDropdownClassicSettings>>();
  
  public items = input<T[]>([]);
  public disabled = input<boolean>(false);
  public opened = input<boolean>(false);

  public selectedItem = model<T | undefined>(undefined);

  public onSelect = output<MvLibDropdownClassicSelectEvent<T>>();
  public onOpen = output<MvLibDropdownClassicOpenEvent>();

  protected isOpen = signal(false);

  protected computedStyles = computed(() => new MvLibDropdownClassicStyles(this.styles()));
  protected computedEffects = computed(() => new MvLibDropdownClassicEffects(this.effects()));
  protected computedSettings = computed(() => new MvLibDropdownClassicSettings(this.settings()));

  protected computedButtonsClasses = computed(() => [
    'buttons',
    ...this.computedEffects().idle,
  ]);
  protected computedResetButtonClasses = computed(() => [
    'reset-button',
    ...this.computedEffects().buttonHover,
  ]);
  protected computedDropdownButtonClasses = computed(() => [
    'dropdown-button',
    ...this.computedEffects().buttonHover,
    ...this.computedEffects().buttonClick,
  ]);
  protected computedListClasses = computed(() => [
    'list',
    ...this.computedEffects().idle,
  ]);
  protected computedItemClasses = computed(() => [
    'item',
    ...this.computedEffects().itemHover,
  ]);

  constructor() {
    effect(() => {
      if (this.disabled()) {
        this.isOpen.set(false);
      }
    });
    effect(() => {
      this.isOpen.set(this.opened());
    });
  }

  ngOnInit() {
    this.initializeAutoWidth();
  }

  protected toggleDropdown(event: Event): void {
    this.isOpen.set(!this.isOpen());
    this.onOpen.emit({
      opened: this.isOpen(),
      event: event,
    });
  }

  protected resetSelection(event: Event): void {
    event.stopPropagation();
    this.selectedItem.set(undefined);
  }

  private initializeAutoWidth(): void {
    requestAnimationFrame(() => {
      if (this.computedStyles().widthPx !== undefined) {
        return;
      }
      const width = this.dropdownButton()?.nativeElement.getBoundingClientRect().width ?? 0;
      if (width > 0) {
        this.computedStyles().widthPx = Math.ceil(width);
      }
    });
  }

  protected selectItem(item: T, event: Event): void {
    this.selectedItem.set(item);
    if (this.computedSettings().closeOnSelect) {
      this.isOpen.set(false);
      this.onOpen.emit({
        opened: this.isOpen(),
        event: event,
      });
    }
    this.onSelect.emit({
      selectedItem: item,
      event: event,
    });
  }

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