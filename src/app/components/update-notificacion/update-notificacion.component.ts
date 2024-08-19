import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-update-notificacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './update-notificacion.component.html',
  styleUrl: './update-notificacion.component.scss'
})
export class UpdateNotificacionComponent implements OnInit {
  updateAvailable = false;

  constructor(private swUpdate: SwUpdate) {}

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe(event => {
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
