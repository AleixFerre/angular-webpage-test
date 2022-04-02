import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feature } from '../models/feature.model';

@Injectable({
  providedIn: 'root',
})
export class FeaturesService {
  constructor(private httpClient: HttpClient) {}

  getFeatures(): Observable<Feature[]> {
    return this.httpClient.get<Feature[]>('assets/data/features.json');
  }
}
