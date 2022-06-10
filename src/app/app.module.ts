import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';

import { HomeComponent } from '@pages/homepage/home/home.component';
import { ErrorComponent } from '@pages/error/error.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ParallaxDirective } from '@core/directives/parallax.directive';
import { StatisticsComponent } from '@pages/homepage/statistics/statistics.component';
import { PanelComponent } from '@pages/homepage/panels/panel/panel.component';
import { PanelsComponent } from '@pages/homepage/panels/panels.component';
import { FooterComponent } from '@pages/homepage/footer/footer.component';
import { HeaderComponent } from '@pages/homepage/header/header.component';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { LastInviteComponent } from '@pages/homepage/last-invite/last-invite.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CommandsComponent } from '@pages/commands/commands.component';
import { CommandComponent } from '@pages/commands/command/command.component';
import { AnimateOnScrollModule } from './external/animate-on-scroll/animate-on-scroll.module';

@NgModule({
  declarations: [
    ParallaxDirective,
    AppComponent,
    HomeComponent,
    ErrorComponent,
    StatisticsComponent,
    PanelsComponent,
    PanelComponent,
    FooterComponent,
    HeaderComponent,
    LastInviteComponent,
    ToolbarComponent,
    CommandsComponent,
    CommandComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    AppRoutingModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
    HttpClientModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    MatProgressBarModule,
    MatSortModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatSliderModule,
    MatExpansionModule,
    NgxScrollTopModule,
    MatButtonToggleModule,
    AnimateOnScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
