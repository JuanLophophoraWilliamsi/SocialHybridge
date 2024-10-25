import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    focus;
    focus1;
    user = { username: '', password: '' };
    loginError = false;
    loginErrorMessage = '';

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() {
    }

    login() {
        this.authService.login(this.user).subscribe(
            response => {
                console.log('Login successful', response);
                // Redirect to home page
                this.router.navigate(['/home']);
            },
            error => {
                console.error('Login failed', error);
                this.loginError = true;
                this.loginErrorMessage = 'Invalid username or password. Please try again.';
            }
        );
    }

    goToRegister() {
        this.router.navigate(['/register']);
    }
}
