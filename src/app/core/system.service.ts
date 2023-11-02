import { Injectable } from '@angular/core';
import { User } from '../user/user.class';
import { AppInitService } from '../app-init.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  get config() { return this.init.config; }
  //get baseurl() {reurn this.config.baseurl; };

  loggedInUser: User | null = null;

  constructor(
    private init: AppInitService,
    private router: Router
  ) { }

  chkLogin(): void {
    if(this.loggedInUser === null)
      this.router.navigateByUrl("/login");
  }
}
