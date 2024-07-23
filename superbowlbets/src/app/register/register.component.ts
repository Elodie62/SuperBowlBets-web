import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private authService: AuthService) {}

  firstname: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';
  onSubmit(): void {
    this.authService
      .register(this.firstname, this.lastname, this.email, this.password)
      .subscribe((response) => {
        if (response.success) {
          console.log('Registration successful');
        } else {
          console.error('Registration failed');
        }
      });
  }
}
