import { SafeHtml } from '@angular/platform-browser';

export interface ServerCommand {
  name: string;
  description: string;
  type: string;
  usage: string;
  aliases?: string[];
}

export interface Command {
  name: string;
  description: SafeHtml;
  type: string;
  usage: string;
  aliases?: string[];
}
