import { Component, OnInit, Input, Output, EventEmitter,  Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  form: FormGroup;

  // constructor(fb: FormBuilder) {

  /*
      this.productForm = new FormGroup({
        firstName: new FormControl()
      });
      */
  constructor(@Inject(FormBuilder) fb: FormBuilder) {

    this.form = fb.group({
      name: fb.group({
        first: ['Nancy', Validators.minLength(2)],
        last: 'Drew',
      }),
      email: '',
    });
   /* 
    this.userForm = new FormGroup({
      firstName: new FormControl()
    });
    */
  }

  async ngOnInit() {
  }

  updateScreen() {
    console.log(this);
  }

  inviteContact(formValues: any) {
    console.log(formValues);
    
 
  }

}
