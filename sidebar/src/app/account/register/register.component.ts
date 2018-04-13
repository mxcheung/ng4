import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, RoutesRecognized } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any = {};
  createUser: boolean;
  constructor(private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit() {
    this.createUser = true;
  }

  public save(): void {

    if (this.createUser) {
      this.createUser = false;
    } else {
      this.router.navigate(['']);
    }
  }
  checkValidUsername() {
    console.log(this.user.username);
  }
}
