import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Stat } from '../models/stats.model';

const statsLink = 'assets/mock/info.json';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  constructor(private httpClient: HttpClient) {}

  getStats(): Observable<Stat[]> {
    return this.httpClient.get<Stat[]>(statsLink);
  }
}
