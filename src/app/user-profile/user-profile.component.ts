import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user: string;
  @Output() userUpdated = new EventEmitter();
  // @Input() user;
  constructor() {
    // this.user = 'Tony';
    this.userUpdated.emit(this.user);
  }
}
