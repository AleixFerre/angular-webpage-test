import { Component, OnInit } from '@angular/core';
import { FeaturesService } from '../core/features.service';
import { Info } from '../core/info.model';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.css'],
})
export class PanelsComponent implements OnInit {
  infoList: Info[] = [];

  constructor(private featuresService: FeaturesService) {}

  ngOnInit(): void {
    this.infoList = this.featuresService.getInfo();
  }
}
