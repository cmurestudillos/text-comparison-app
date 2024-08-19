import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextComparisonComponent } from './components/text-comparison/text-comparison.component';
import { UpdateNotificacionComponent } from './components/update-notificacion/update-notificacion.component';
import packageInfo from '../../package.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TextComparisonComponent, UpdateNotificacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'text-comparison-app';
  appVersion!: string;
  currentYear = new Date().getFullYear();

  ngOnInit() {
    this.appVersion = packageInfo.version;
  }
}
