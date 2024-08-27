import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-adding-button',
  templateUrl: './adding-button.component.html',
  styleUrls: ['./adding-button.component.scss'],
  standalone: true
})
export class AddingButtonComponent {
  @Output() addSeries = new EventEmitter<void>();

  buttonClick() {
    this.addSeries.emit();  // Emit the event when the button is clicked
  }
}
