import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Stat } from '../models/stats.model';

const statsLink = 'https://raw.githubusercontent.com/AleixFerre/CataBot/main/docs/Storage/info.json';
const statsLinkMock = 'assets/mock/info.json'; // MOCK DATA

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  private statsLink = environment.production ? statsLink : statsLinkMock;

  constructor(private httpClient: HttpClient) {}

  getStats(): Observable<Stat[]> {
    return this.httpClient.get<Stat[]>(this.statsLink);
  }
}
