import { Component, input, output, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MvLibTextboxClassicEffects, MvLibTextboxClassicSettings, MvLibTextboxClassicStyles } from '..';

@Component({
  selector: 'mv-lib-textbox-classic',
  imports: [CommonModule],
  templateUrl: './textbox-classic.component.html',
  styleUrls: ['./textbox-classic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MvLibTextboxClassicComponent {

  public styles = input<Partial<MvLibTextboxClassicStyles>>();
  public effects = input<Partial<MvLibTextboxClassicEffects>>();
  public settings = input<Partial<MvLibTextboxClassicSettings>>();
  
  public disabled = input<boolean>(false);
  
  public onClick = output<Event>();

  protected computedStyles = computed(() => new MvLibTextboxClassicStyles(this.styles()));
  protected computedEffects = computed(() => new MvLibTextboxClassicEffects(this.effects()));
  protected computedSettings = computed(() => new MvLibTextboxClassicSettings(this.settings()));
  
  protected computedClasses = computed(() => [
    'textbox',
    ...this.computedEffects().idle,
    ...this.computedEffects().hover,
  ]);
}
