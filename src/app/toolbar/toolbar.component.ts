import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  backToTop() {
    if (this.route.url === '/') window.scrollTo(0, 0);
    else this.route.navigate(['/']);
  }
}
