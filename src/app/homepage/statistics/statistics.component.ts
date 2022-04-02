import { Component, OnInit } from '@angular/core';
import { Stat } from 'src/app/core/models/stats.model';
import { StatsService } from '../../core/services/stats.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  stats: Stat[] = [];

  constructor(private statsService: StatsService) {}

  ngOnInit(): void {
    this.statsService.getStats().subscribe(stats => {
      this.stats = stats;
    });
  }
}
