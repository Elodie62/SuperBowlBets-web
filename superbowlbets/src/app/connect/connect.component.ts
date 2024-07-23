import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss'],
  providers: [AuthService],
})
export class ConnectComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}
  onSubmit(): void {
    this.authService
      .login(this.email, this.password)
      .subscribe((response: any) => {
        if (response.success) {
          console.log('Login successful');
          this.router.navigate(['/']);
          localStorage.setItem('currentUser', JSON.stringify(response.user));
        } else {
          console.error('Login failed');
        }
      });
  }
}
