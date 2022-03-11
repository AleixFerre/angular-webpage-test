import { Component, Input, OnInit } from '@angular/core';
import { Info } from 'src/app/core/info.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  constructor() {}

  @Input() isLast: boolean = false;
  @Input() direction: 'left' | 'right' = 'left';
  @Input() info!: Info;

  root: string = '';

  ngOnInit(): void {
    this.root = environment.root;
  }
}
