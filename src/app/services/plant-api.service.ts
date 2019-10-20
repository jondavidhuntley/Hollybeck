import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Plant } from '../models/plant';
import { environment } from '../../environments/environment';
import { async } from '@angular/core/testing';
import { Observable, of, from, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlantApiService {

  plantData: Plant[];

  private loadingSource = new BehaviorSubject(false);
  loading = this.loadingSource.asObservable();

  constructor(private httpClient: HttpClient) { }

  // Get Default Plants
  getDefaultPlants(): Observable<Plant[]> {

    // await delay(300);
    this.waitForOneSecond().then(
        v =>
        {
          console.log(v);
        }
      );

    const data: Plant[] = [
      new Plant(10011, 'Rose', 'Guns or Roses for all occasions', true),
      new Plant(10022, 'Tulip', 'Tulips from Amsterjam', true)
    ];

    return of(data);
  }

  waitForOneSecond() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('I promise to return after 3 seconds!');
      }, 3000);
    });
  }

  /* Synchronous and Bad
  getDefaultPlants(): Plant[] {
    const data: Plant[] = [
      new Plant(10011, 'Rose', 'Roses for all occasions', true),
      new Plant(10022, 'Tulip', 'Tulips from Amsterjam', true)
    ];
    console.log(data[1].Name);
    return data;
  }
  */
}

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}
