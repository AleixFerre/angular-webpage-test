import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Command } from './models/command.model';

@Injectable({
  providedIn: 'root',
})
export class CommandsService {
  private commandsLink = 'https://raw.githubusercontent.com/AleixFerre/CataBot/main/docs/Storage/commands.json';

  constructor(private httpClient: HttpClient) {}

  getCommands(): Observable<Command[]> {
    return this.httpClient.get<Command[]>(this.commandsLink).pipe(
      map((commands: Command[]) =>
        commands.sort((a, b) => {
          // Sort by name alphabetically
          return a.name.localeCompare(b.name);
        })
      )
    );
  }
}
