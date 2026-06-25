import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TextComparisonComponent } from './components/text-comparison/text-comparison.component';
import { UpdateNotificacionComponent } from './components/update-notificacion/update-notificacion.component';
import { ThemeService } from './services/theme.service';
import packageInfo from '../../package.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TextComparisonComponent, UpdateNotificacionComponent, MatIconModule, MatTooltipModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private readonly themeService = inject(ThemeService);

  title = 'text-comparison-app';
  appVersion!: string;
  currentYear = new Date().getFullYear();
  theme = this.themeService.theme;

  ngOnInit() {
    this.appVersion = packageInfo.version;
  }

  toggleTheme(): void {
    this.themeService.toggle();
  }
}
