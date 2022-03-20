import { Injectable } from '@angular/core';
import { Stat } from './models/stat.model';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  stats: Stat[] = [
    {
      name: 'Servers',
      value: 42,
    },
    {
      name: 'Members',
      value: 40974,
    },
    {
      name: 'Comandes',
      value: 83,
    },
  ];

  constructor() {}

  getStats(): Stat[] {
    return this.stats;
  }
}
