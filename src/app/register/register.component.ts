import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onRegister(formData: NgForm) {
    const value = formData.value;
    this.authService.register(value.email, value.password).subscribe(
      (success) => console.log('User Registered Succesfully!'),
      (error) => console.log(error)
    );
  }
}
