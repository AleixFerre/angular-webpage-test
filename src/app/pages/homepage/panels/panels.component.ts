import { Component, OnInit } from '@angular/core';
import { Feature } from '@core/models/feature.model';
import { FeaturesService } from '@core/services/features.service';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.scss'],
})
export class PanelsComponent implements OnInit {
  featuresList: Feature[] = [];

  constructor(private featuresService: FeaturesService) {}

  ngOnInit(): void {
    this.featuresService.getFeatures().subscribe(features => {
      this.featuresList = features;
    });
  }
}
