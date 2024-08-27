import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true
})
export class HeaderComponent {
  @Output() seriesClicked = new EventEmitter<void>();

  onSeriesClick() {
    this.seriesClicked.emit();
  }
}
