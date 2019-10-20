import { Component, OnInit } from '@angular/core';
import { PlantApiService } from '../services/plant-api.service';
import { Plant } from '../models/plant';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {

  constructor(private apiService: PlantApiService) { }
  plants: Plant[];

  ngOnInit() {
    this.getPlants();
  }

  getPlants(): void {
    // console.log("Fetching Plants");
    // this.plants = this.apiService.getDefaultPlants();

    this.apiService.getDefaultPlants()
      .subscribe(plants => this.plants = plants);
  }

}
