import { Component } from '@angular/core';
import { UserAuthService } from 'src/app/user/user-auth.service';
// import { UserAuthService } from '../user/auth-service.service';
// give proper path to UserAuthService as per your file sstructure.

@Component({
  selector: 'app-menu',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(public userAuth: UserAuthService) {}
  }
