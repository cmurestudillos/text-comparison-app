import { Component, OnInit, inject } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-update-notificacion',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './update-notificacion.component.html',
  styleUrl: './update-notificacion.component.scss',
})
export class UpdateNotificacionComponent implements OnInit {
  private swUpdate = inject(SwUpdate);

  updateAvailable = false;

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe((event) => {
        if (event.type === 'VERSION_READY') {
          this.updateAvailable = true;
        }
      });
    }
  }

  updateApp() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.activateUpdate().then(() => document.location.reload());
    }
  }
}
