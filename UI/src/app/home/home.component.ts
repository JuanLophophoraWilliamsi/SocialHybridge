import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    focus;
    focus1;
    welcomeMessage: string;

    constructor(private authService: AuthService) { }

    ngOnInit() {
        const currentUser = this.authService.getCurrentUser();
        if (currentUser && currentUser.isNewUser) {
            this.welcomeMessage = 'Bienvenido por primera vez a la Comunidad Social Hybridge!';
        } else {
            this.welcomeMessage = 'Bienvenido nuevamente a la Comunidad Social Hybridge!';
        }
    }
}