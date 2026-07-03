import { Component, input, output, computed, ChangeDetectionStrategy, HostListener, viewChild, ElementRef, inject, model, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MvLibTextboxClassicEffects, MvLibTextboxClassicSettings, MvLibTextboxClassicStyles } from '..';

export interface MvLibTextboxClassicChangeEvent {
  readonly value: string | undefined;
  readonly event: Readonly<Event>;
}

export interface MvLibTextboxClassicSelectedEvent {
  readonly selected: boolean;
  readonly event: Readonly<Event>;
}

@Component({
  selector: 'mv-lib-textbox-classic',
  imports: [CommonModule],
  templateUrl: './textbox-classic.component.html',
  styleUrls: ['./textbox-classic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MvLibTextboxClassicComponent {
  
  private inputElement = viewChild<ElementRef<HTMLInputElement>>('textboxInput');
  private dropdownRoot = viewChild<ElementRef<HTMLElement>>("dropdownRoot");

  private hostElement = inject(ElementRef<HTMLElement>);

  public styles = input<Partial<MvLibTextboxClassicStyles>>();
  public effects = input<Partial<MvLibTextboxClassicEffects>>();
  public settings = input<Partial<MvLibTextboxClassicSettings>>();

  public disabled = input(false);
  public selected = model(false);
  public error = input(false);

  public value = model<string | undefined>(undefined);
  
  public onChange = output<MvLibTextboxClassicChangeEvent>();
  public onSelect = output<MvLibTextboxClassicSelectedEvent>();

  protected computedStyles = computed(() => new MvLibTextboxClassicStyles(this.styles()));
  protected computedEffects = computed(() => new MvLibTextboxClassicEffects(this.effects()));
  protected computedSettings = computed(() => new MvLibTextboxClassicSettings(this.settings()));
  
  protected computedClasses = computed(() => [
    'textbox',
    ...this.computedEffects().hover,
    ...this.computedEffects().selected,
  ]);

  constructor() {
    effect(() => {
      const inputElement = this.inputElement()?.nativeElement;
      if (!inputElement || this.disabled()) {
        return;
      }
      if (this.selected() && document.activeElement !== inputElement) {
        inputElement.focus();
      }
      else if (!this.selected() && document.activeElement === inputElement) {
        inputElement.blur();
      }
    });
  }

  protected onInput(event: Event): void {
    const v = (event.target as HTMLInputElement).value;
    this.value.set(v);
    this.onChange.emit({ value: v, event });
  }

  protected setSelected(selected: boolean, event: Event): void {
    if (this.selected() === selected) {
      return;
    }

    this.selected.set(selected);
    this.onSelect.emit({
      selected: selected,
      event: event,
    });
  }

  @HostListener('document:click', ['$event'])
  protected onDocumentClick(event: Event): void {
    if (!this.selected()) {
      return;
    }
    const target = event.target as Node | null;
    const rootElement = this.dropdownRoot()?.nativeElement ?? this.hostElement.nativeElement;
    if (target && !rootElement.contains(target)) {
      this.setSelected(false, event);
    }
  }
}
