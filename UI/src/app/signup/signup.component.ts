import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test: Date = new Date();
    focus;
    focus1;
    focus2;
    user = { username: '', password: '' };
    agreeToPrivacyPolicy = false;
    privacyPolicyError = false;
    usernameError = false;
    usernameErrorMessage = '';

    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit() { }

    register(form: NgForm) {
        if (!this.agreeToPrivacyPolicy) {
            this.privacyPolicyError = true;
            return;
        }

        this.authService.register(this.user).subscribe(
            response => {
                console.log('Registration successful', response);
                // Redirect to login page or handle successful registration
                this.router.navigate(['/login']);
            },
            error => {
                console.error('Registration failed', error);
                if (error.message === 'Username already exists') {
                    this.usernameError = true;
                    this.usernameErrorMessage = 'Username already exists. Please choose another one.';
                } else {
                    // Handle other registration errors
                }
            }
        );
    }
}

