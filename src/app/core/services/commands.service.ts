import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Command, ServerCommand } from '../models/command.model';

const commandsLink = 'https://raw.githubusercontent.com/AleixFerre/CataBot/main/storage/commands.json';
const commandsLinkMock = 'assets/mock/commands.json'; // MOCK DATA

@Injectable({
  providedIn: 'root',
})
export class CommandsService {
  private commandsLink = environment.production ? commandsLink : commandsLinkMock;

  private cachedCommands: Command[] = [];

  constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer) {}

  getCommands(): Observable<Command[]> {
    if (this.cachedCommands.length > 0) {
      return new Observable(observer => {
        observer.next(this.cachedCommands);
        observer.complete();
      });
    }
    return this.httpClient.get<ServerCommand[]>(this.commandsLink).pipe(
      map((commands: ServerCommand[]) => {
        const c = commands
          .map(c => this.fixCommand(c))
          .sort((a, b) => {
            // Sort by name alphabetically
            return a.name.localeCompare(b.name);
          });
        this.cachedCommands = c;
        return c;
      })
    );
  }

  private fixCommand(command: ServerCommand): Command {
    const fixedCommand = { ...command } as Command;
    const fixedDescription = `<html>${this.i_fixDescription(command.description, 1)}</html>`;
    fixedCommand.description = this.sanitizer.bypassSecurityTrustHtml(fixedDescription);
    return fixedCommand;
  }

  private i_fixDescription(description: string, iteration: number): string {
    if (description.indexOf('**') === -1) {
      return description;
    }

    return this.i_fixDescription(
      iteration % 2 === 0 ? description.replace('**', '</b>') : description.replace('**', '<b>'),
      iteration + 1
    );
  }
}
