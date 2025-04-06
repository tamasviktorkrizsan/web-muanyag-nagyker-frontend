import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  @Output() sidebarToggleClickEvent = new EventEmitter<void>();

  sidebarToggleClick() {
    this.sidebarToggleClickEvent.emit();
  }

  constructor() { }
}
