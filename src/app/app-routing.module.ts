import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandsComponent } from '@pages/commands/commands.component';
import { ErrorComponent } from '@pages/error/error.component';
import { HomeComponent } from '@pages/homepage/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'commands',
    component: CommandsComponent,
  },
  {
    // 404 error page
    path: '**',
    component: ErrorComponent,
  },
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      // Don't perform initial navigation in iframes
      initialNavigation: !isIframe ? 'enabled' : 'disabled',
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
