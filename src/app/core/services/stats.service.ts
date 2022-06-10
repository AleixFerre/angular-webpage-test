import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Stat } from '../models/stats.model';

type APIStats = Record<string, number>;

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  constructor(private httpClient: HttpClient) {}

  getStats(): Observable<Stat[]> {
    return this.httpClient.get<APIStats>(environment.api.stats).pipe(
      map((stats: APIStats) => {
        return Object.keys(stats).map(key => ({
          displayName: this.firstCapital(key),
          value: stats[key],
        }));
      })
    );
  }

  private firstCapital(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
