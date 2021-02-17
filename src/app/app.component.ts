import { Component } from '@angular/core';
import { VERSION as materialVersion } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eclipse';
  materialVersion = materialVersion;
}
