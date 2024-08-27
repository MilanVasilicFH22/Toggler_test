import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SeriesComponent } from './series/series.component';
import { BottomSectionComponent } from './bottom-section/bottom-section.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, HeaderComponent, SeriesComponent,BottomSectionComponent]  // Include CommonModule here
})
export class AppComponent {
  title = 'my-angular-app';
  showSeries = false;  // Property to track visibility of series
  numberofclicks = 0;

  // Function to toggle the visibility
  toggleSeries() {
    this.showSeries = !this.showSeries;
    this.numberofclicks = this.numberofclicks+1;
  }
}
