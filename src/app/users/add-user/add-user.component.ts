import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersFacade } from '../state/users.facade';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  userForm!: FormGroup;
  emailRegex: RegExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private facade: UsersFacade
  ) {}

  ngOnInit(): void {
    this.setForm();
  }

  setForm(): void {
    this.userForm = this.fb.group({
      profileName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.pattern(this.emailRegex)]],
    });
  }

  submitForm(): void {
    if (this.userForm.valid) {
      this.facade.postUserData(this.userForm.value);
      this.userForm.reset();
      this.router.navigate(['/users']);
    }
  }
}
