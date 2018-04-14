import { Component, OnInit, AfterViewInit, Renderer2, ElementRef, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  alive = true;
  username: string;
  error: string;
  keyMissing: boolean;
  resetAccount: any;
  success: string;
  key: string;
  redirectUrl: string;
  loadingRequest = false;
  placeholder: string;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  forgotPassword() {
    this.success = '';
    this.error = '';
    const body = {
      username: this.username
    };
    this.loadingRequest =   !this.loadingRequest;

  }

  backToLogin() {
    this.router.navigate(['']);
  }
}
