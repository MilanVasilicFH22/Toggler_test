import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
  standalone: true,
  imports: [CommonModule]  // Ensure CommonModule is imported
})
export class SeriesComponent implements OnInit {
  seriesList: { title: string; description: string }[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getSeriesData();  // Fetch data when the component initializes
  }

  getSeriesData() {
    this.httpClient.get<any[]>('/assets/series.json')  // Adjust the path if necessary
      .subscribe((data: any[]) => {
        console.log('Series data loaded:', data);  // Log the data to verify it is loaded
        this.seriesList = data;  // Assign the fetched data to seriesList
      }, error => {
        console.error('Error loading series data:', error);  // Handle errors if the fetch fails
      });
  }
}
