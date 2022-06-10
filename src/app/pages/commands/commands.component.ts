import { Component, OnInit } from '@angular/core';
import { CommandsService } from '@core/services/commands.service';
import { Command } from '@core/models/command.model';
import { Utils } from '@core/utils/utils';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

const ALL_TYPES = 'Tots';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss'],
})
export class CommandsComponent implements OnInit {
  commands: Command[] = [];
  types: string[] = [];
  filteredCommands: Command[] = [];

  selectedType: string = ALL_TYPES;

  isLoading = true;

  constructor(private commandsService: CommandsService) {}

  ngOnInit(): void {
    this.commandsService.getCommands().subscribe(c => {
      this.commands = c;
      this.filteredCommands = this.commands;

      this.types = [...new Set(this.commands.map(c => Utils.firstCapital(c.type)))].sort((a, b) => a.localeCompare(b));

      this.types.unshift(ALL_TYPES); // Add 'Tots' to the beginning of the array

      this.isLoading = false;
    });
  }

  onTypeChange(event: MatButtonToggleChange): void {
    this.selectedType = event.value;
    if (this.selectedType === ALL_TYPES) {
      this.filteredCommands = this.commands; // Show all types
    } else {
      this.filteredCommands = this.commands.filter(c => c.type.toLowerCase() === this.selectedType.toLowerCase());
    }
  }
}
