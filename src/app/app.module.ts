import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomModule } from './custom/custom.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListVoitComponent } from './components/list-voit/list-voit.component';
import { RecapBaseComponent } from './components/recap-base/recap-base.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { HighlightDirective } from './directives/highlight.directive';
import { TitrifierPipe } from './pipes/titrifier.pipe';
import { VoiturePipe } from './pipes/voiture.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListVoitComponent,
    RecapBaseComponent,
    NavComponent,
    LoginComponent,
    HighlightDirective,
    TitrifierPipe,
    VoiturePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
