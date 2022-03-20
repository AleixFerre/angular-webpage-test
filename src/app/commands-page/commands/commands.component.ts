import { Component, OnInit } from '@angular/core';
import { CommandsService } from 'src/app/core/commands.service';
import { Command } from 'src/app/core/models/command.model';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss'],
})
export class CommandsComponent implements OnInit {
  commands: Command[] = [];

  isLoading = true;

  constructor(private commandsService: CommandsService) {}

  ngOnInit(): void {
    this.commandsService.getCommands().subscribe(c => {
      this.commands = c;
      this.isLoading = false;
    });
  }
}
