import { TestBed } from '@angular/core/testing';

import { PlantApiService } from './plant-api.service';

describe('PlantApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlantApiService = TestBed.get(PlantApiService);
    expect(service).toBeTruthy();
  });
});
