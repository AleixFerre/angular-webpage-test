import { Component, Input, OnInit } from '@angular/core';
import { Feature } from '@core/models/feature.model';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit {
  constructor() {}

  @Input() isLast: boolean = false;
  @Input() direction: 'left' | 'right' = 'left';
  @Input() info!: Feature;

  ngOnInit(): void {}
}
