import { Component, input, output, computed, ChangeDetectionStrategy, HostListener, viewChild, ElementRef, inject, model, effect, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MvLibTextboxClassicEffects, MvLibTextboxClassicSettings, MvLibTextboxClassicStyles } from '..';
import { MvLibBaseComponent } from '../../mv-lib-base-component.components';

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
export class MvLibTextboxClassicComponent extends MvLibBaseComponent<string> {
  
  private inputElement = viewChild<ElementRef<HTMLInputElement>>('textboxInput');
  private dropdownRoot = viewChild<ElementRef<HTMLElement>>("dropdownRoot");

  private hostElement = inject(ElementRef<HTMLElement>);

  public styles = input<Partial<MvLibTextboxClassicStyles>>();
  public effects = input<Partial<MvLibTextboxClassicEffects>>();
  public settings = input<Partial<MvLibTextboxClassicSettings>>();

  // Only use the disabled input if not using a form
  // Otherwise use the form control to set the disabled state
  public disabled = input(false);
  public selected = model(false);

  public input = model<string | undefined>(undefined);
  
  public onChange = output<MvLibTextboxClassicChangeEvent>();
  public onSelect = output<MvLibTextboxClassicSelectedEvent>();

  protected computedStyles = computed(() => new MvLibTextboxClassicStyles(this.styles()));
  protected computedEffects = computed(() => new MvLibTextboxClassicEffects(this.effects()));
  protected computedSettings = computed(() => new MvLibTextboxClassicSettings(this.settings()));
  protected isDisabled = computed(() => this.disabled() || this.isFormDisabled());
  
  protected computedClasses = computed(() => [
    'textbox',
    ...this.computedEffects().hover,
    ...this.computedEffects().selected,
  ]);

  constructor() {
    super();
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

  /**
   * 
   * @param event 
   */
  protected onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.input.set(value);
    this.emitFormValueChange(value);
    this.onChange.emit({ 
      input: value,
      event: event,
    });
  }

  protected onBlur(event: Event): void {
    this.setSelected(false, event);
    this.emitFormTouched();
  }

  protected setControlValue(value: string | undefined): void {
    this.input.set(value);
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
