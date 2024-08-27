import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SeriesComponent } from './series/series.component';
import { BottomSectionComponent } from './bottom-section/bottom-section.component';
import { AddingButtonComponent } from './adding-button/adding-button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, HeaderComponent, SeriesComponent, BottomSectionComponent, AddingButtonComponent]
})
export class AppComponent implements OnInit {
  title = 'my-angular-app';
  showSeries = false;
  numberofclicks = 0;
  seriesList: { title: string; description: string }[] = [];  // This holds the series list

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getSeriesData();  // Fetch initial series data when the component initializes
  }

  toggleSeries() {
    this.showSeries = !this.showSeries;  // Toggle the visibility of the SeriesComponent
    this.numberofclicks += 1;
  }

  addNewSeries() {
    const newSeries = {
      title: 'New Series Title',
      description: 'New Series Description'
    };
    this.seriesList.push(newSeries);  // Add one new series to the list
  }

  private getSeriesData() {
    this.httpClient.get<{ title: string; description: string }[]>('/assets/series.json')  // Adjust the path if necessary
      .subscribe((data: { title: string; description: string }[]) => {
        console.log('Series data loaded:', data);  // Log the data to verify it is loaded
        this.seriesList = data;  // Initialize the seriesList with fetched data
      }, error => {
        console.error('Error loading series data:', error);  // Handle errors if the fetch fails
      });
  }
}
