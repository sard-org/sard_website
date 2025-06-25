import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class BusyService {
  constructor(private spinnerService: NgxSpinnerService) {}
  busyRequest = 0;
  busy() {
    this.busyRequest++;
    this.spinnerService.show();
  }
  hide() {
    this.busyRequest--;
    if (this.busyRequest <= 0) {
      this.busyRequest = 0;
      this.spinnerService.hide();
    }
  }
}
