import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SeriesComponent {
  @Input() seriesList: { title: string; description: string }[] = [];  // Receive the list from parent
}
