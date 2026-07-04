import { Component, input, output, computed, ChangeDetectionStrategy, HostListener, viewChild, ElementRef, inject, model, effect, signal, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MvLibTextboxClassicEffects, MvLibTextboxClassicSettings, MvLibTextboxClassicStyles } from '..';

export interface MvLibTextboxClassicChangeEvent {
  readonly input: string | undefined;
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
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MvLibTextboxClassicComponent),
      multi: true,
    },
  ],
})
export class MvLibTextboxClassicComponent implements ControlValueAccessor {
  
  private inputElement = viewChild<ElementRef<HTMLInputElement>>('textboxInput');
  private dropdownRoot = viewChild<ElementRef<HTMLElement>>("dropdownRoot");

  private hostElement = inject(ElementRef<HTMLElement>);

  public styles = input<Partial<MvLibTextboxClassicStyles>>();
  public effects = input<Partial<MvLibTextboxClassicEffects>>();
  public settings = input<Partial<MvLibTextboxClassicSettings>>();

  public disabled = input(false);
  public selected = model(false);

  public input = model<string | undefined>(undefined);
  
  public onChange = output<MvLibTextboxClassicChangeEvent>();
  public onSelect = output<MvLibTextboxClassicSelectedEvent>();

  protected computedStyles = computed(() => new MvLibTextboxClassicStyles(this.styles()));
  protected computedEffects = computed(() => new MvLibTextboxClassicEffects(this.effects()));
  protected computedSettings = computed(() => new MvLibTextboxClassicSettings(this.settings()));
  private formDisabled = signal(false);

  private onFormValueChange: (value: string | undefined) => void = () => undefined;
  private onFormTouched: () => void = () => undefined;

  protected isDisabled = computed(() => this.disabled() || this.formDisabled());
  
  protected computedClasses = computed(() => [
    'textbox',
    ...this.computedEffects().hover,
    ...this.computedEffects().selected,
  ]);

  constructor() {
    effect(() => {
      const inputElement = this.inputElement()?.nativeElement;
      if (!inputElement || this.isDisabled()) {
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
    this.input.set(v);
    this.onFormValueChange(v);
    this.onChange.emit({ input: v, event });
  }

  protected onBlur(event: Event): void {
    this.setSelected(false, event);
    this.onFormTouched();
  }

  writeValue(value: string | null): void {
    this.input.set(value ?? undefined);
  }

  registerOnChange(fn: (value: string | undefined) => void): void {
    this.onFormValueChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onFormTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.formDisabled.set(isDisabled);
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
