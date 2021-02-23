import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {
    welcome: string;
    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.welcome = this.userService.isLoggedIn ?
        'Welcome, ' + this.userService.user.name : 'Please log in.';
    }
}
