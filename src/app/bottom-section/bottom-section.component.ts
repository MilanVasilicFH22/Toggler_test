import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bottom-section',
  templateUrl: './bottom-section.component.html',
  styleUrls: ['./bottom-section.component.scss'],
  standalone: true,
})
export class BottomSectionComponent {
  @Input() numberofclicks!: number;  // Input decorator to receive the number of clicks
}
