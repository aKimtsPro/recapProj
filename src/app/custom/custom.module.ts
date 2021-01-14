import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomComponent } from './components/custom/custom.component';
import { NoUrlComponent } from './components/no-url/no-url.component';
import { AppModule } from '../app.module';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './components/child/child.component';
import { VidePipe } from './pipes/vide.pipe';

@NgModule({
  declarations: [CustomComponent, NoUrlComponent, ChildComponent, VidePipe],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CustomComponent] 
})
export class CustomModule { }
