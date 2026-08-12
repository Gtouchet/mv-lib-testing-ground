import { BaseExampleComponent } from '../../base-example.component';
import { AfterViewInit, ChangeDetectionStrategy, Component, signal, viewChild } from '@angular/core';
import { INPUTS } from '../../../inputs/_inputs.export';
import { MvLibButtonClassicComponent, MvLibTreeviewClassicAnimations, MvLibTreeviewClassicComponent, MvLibTreeviewClassicEffects, MvLibTreeviewClassicSettings, MvLibTreeviewClassicStyle, MvLibTreeviewDirectives } from 'mv-lib';
import { CommonModule } from '@angular/common';

interface User {
  id: number;
  name: string;
  contacts?: Contact[];
}

interface Contact {
  type: string;
  value: string;
}

@Component({
    selector: 'app-treeview-classic-example',
    imports: [
    MvLibTreeviewClassicComponent,
    MvLibTreeviewDirectives,
    MvLibButtonClassicComponent,
    INPUTS,
    CommonModule,
],
    templateUrl: './treeview-classic-example.component.html',
    styleUrl: '../../example.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class TreeviewClassicExampleComponent extends BaseExampleComponent implements AfterViewInit {

    protected treeview = viewChild.required<MvLibTreeviewClassicComponent<User>>('mvLibTreeviewClassic');

    protected style = signal<Partial<MvLibTreeviewClassicStyle>>({
        width: '250px',
    });

    protected effects = signal<Partial<MvLibTreeviewClassicEffects>>({
        
    });

    protected animations = signal<Partial<MvLibTreeviewClassicAnimations>>({

    });
    
    protected settings = signal<Partial<MvLibTreeviewClassicSettings>>({

    });

    protected users = signal<User[]>([
        { 
            id: 1,
            name: 'Alice',
            contacts: [
                { type: 'email', value: 'alice@example.com' },
            ],
        },
        { 
            id: 2,
            name: 'Bob',
        },
        { 
            id: 3,
            name: 'Charlie',
            contacts: [
                { type: 'email', value: 'charlie@example.com' },
                { type: 'phone', value: '+0987654321' },
            ],
        },
        { 
            id: 4,
            name: 'David',
            contacts: [
                { type: 'email', value: 'david@example.com' },
            ],
        },
        { 
            id: 5,
            name: 'Eve',
            contacts: [
                { type: 'email', value: 'eve@example.com' },
                { type: 'phone', value: '+1122334455' },
                { type: 'phone', value: '+5566778899' },
            ],
        },
        { 
            id: 6,
            name: 'Frank',
            contacts: [
                { type: 'phone', value: '+1234567890' },
            ],
        },
        { 
            id: 7,
            name: 'Grace',
        },
        { 
            id: 8,
            name: 'Henry',
            contacts: [
                { type: 'email', value: 'henry@example.com' },
                { type: 'phone', value: '+9988776655' },
            ],
        },
        { 
            id: 9,
            name: 'Ivy',
            contacts: [
                { type: 'email', value: 'ivy@example.com' },
            ],
        },
    ]);

    ngAfterViewInit() {
        this.selectedPartStyle = signal('general');
        this.logProperties = [
            { property: 'style', value: () => this.treeview().getStyle() },
            { property: 'effects', value: () => this.treeview().getEffects() },
            { property: 'settings', value: () => this.treeview().getSettings() },
            { property: 'disabled', value: this.disabled() },
        ];
        this.refreshLog();
    }
}
