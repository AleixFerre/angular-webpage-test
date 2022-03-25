import { Component, OnInit } from '@angular/core';
import { CommandsService } from 'src/app/core/commands.service';
import { Command } from 'src/app/core/models/command.model';

const ALL_TYPES = 'Tots';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.scss'],
})
export class CommandsComponent implements OnInit {
  commands: Command[] = [];
  types: string[] = [];
  filteredTypes = this.types;

  selectedType: string = ALL_TYPES;

  isLoading = true;

  constructor(private commandsService: CommandsService) {}

  ngOnInit(): void {
    this.commandsService.getCommands().subscribe(c => {
      this.commands = c;

      const typesSet = new Set<string>();
      this.commands.forEach(command => {
        typesSet.add(this.firstCapital(command.type));
      });

      this.types = Array.from(typesSet).sort((a, b) => a.localeCompare(b));

      this.types.unshift(ALL_TYPES); // Add 'Tots' to the beginning of the array

      this.isLoading = false;
    });
  }

  private firstCapital(type: string): string {
    return type.charAt(0).toUpperCase() + type.slice(1);
  }

  onTypeChange(type: string): void {
    if (type === ALL_TYPES) {
      this.filteredTypes = this.types; // Show all types
    } else {
      this.selectedType = type;
      this.filteredTypes = this.types.filter(t => t === type);
    }
  }
}
