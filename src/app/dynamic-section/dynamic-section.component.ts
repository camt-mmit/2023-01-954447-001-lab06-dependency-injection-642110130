import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicInputComponent } from '../example/dynamic-input/dynamic-input.component';
import { SectionData } from '../example/types';

@Component({
  selector: 'app-dynamic-section',
  standalone: true,
  imports: [CommonModule, DynamicInputComponent],
  templateUrl: './dynamic-section.component.html',
  styleUrls: ['./dynamic-section.component.scss']
})
export class DynamicSectionComponent {

  @Input({ required: true }) items!: SectionData;

  @Output() dataChange = new EventEmitter<SectionData>();

  addSection(): void {
    this.items.push([{ value: 0 }]);
    this.dataChange.emit(this.items);
  }
  deleteSection(index: number): void {
    this.items.splice(index, 1);
    this.dataChange.emit(this.items);
  }

  save(): void{
    this.dataChange.emit(this.items);
  }

  //addSection()
}
