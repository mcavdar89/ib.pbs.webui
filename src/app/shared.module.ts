import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelformatPipe } from './pipes/telformat.pipe';
import { ColorDirective } from './directives/color.directive';



@NgModule({
  declarations: [
    TelformatPipe,
    ColorDirective,
  ],
  imports: [
  ],
  exports:[
    TelformatPipe,
    ColorDirective,
  ]
})
export class SharedModule { }
