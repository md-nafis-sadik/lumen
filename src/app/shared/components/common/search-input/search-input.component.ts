import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'] // Optional
})
export class SearchInputComponent {
  @Input() placeholder: string = 'Search...';
  @Input() model: string = '';
  @Output() modelChange = new EventEmitter<string>();

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.model = value;
    this.modelChange.emit(value);
  }
}
