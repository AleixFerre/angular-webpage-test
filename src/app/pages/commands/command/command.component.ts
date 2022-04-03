import { Component, Input, OnInit } from '@angular/core';
import { Command } from '@core/models/command.model';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss'],
})
export class CommandComponent implements OnInit {
  @Input() command!: Command;

  aliases!: string;

  constructor() {}

  ngOnInit(): void {
    if (this.command.aliases) {
      this.aliases = this.command.aliases.join(', ');
    }
  }
}
