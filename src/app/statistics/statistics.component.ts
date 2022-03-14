import { Component, OnInit } from '@angular/core';
import { Stat } from '../core/models/stat.model';
import { StatsService } from '../core/stats.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent implements OnInit {
  stats: Stat[] = [];

  constructor(private statsService: StatsService) {}

  ngOnInit(): void {
    this.stats = this.statsService.getInfo();
  }
}
