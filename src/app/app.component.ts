import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  @Input() a?: string;
  @Output() b?: EventEmitter<string> = new EventEmitter<string>();  
  title = 'IB.PBS.WebUI';
}
