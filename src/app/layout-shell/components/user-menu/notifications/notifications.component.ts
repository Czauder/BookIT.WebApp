import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  public isShow = false;

  constructor() {}

  public ngOnInit(): void {}

  public showInput(): void {
    this.isShow = !this.isShow;
  }
}
