import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomModule } from './custom/custom.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListVoitComponent } from './components/list-voit/list-voit.component';
import { VoitureFormComponent } from './components/list-voit/voiture-form/voiture-form.component';
import { RecapBaseComponent } from './components/recap-base/recap-base.component';
import { NavComponent } from './components/nav/nav.component';
import { ObsDemoComponent } from './components/obs-demo/obs-demo.component';
import { LoginComponent } from './components/login/login.component';
import { HighlightDirective } from './directives/highlight.directive';
import { TitrifierPipe } from './pipes/titrifier.pipe';
import { VoiturePipe } from './pipes/voiture.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { HttpClientModule } from '@angular/common/http';


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
    FilterPipe,
    VoitureFormComponent,
    ObsDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
