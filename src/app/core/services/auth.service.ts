import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from '../services/cookie.service';
import { User } from '../models/auth.models';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private api: string;
    private accessText: string;
    user: User;

    constructor(private http: HttpClient, private cookieService: CookieService) {
        this.api =  environment.api;
        this.accessText = 'access';
    }

    /**
     * Returns the current user
     */
    public currentUser(): User {
        if (!this.user) {
            this.user = JSON.parse(this.cookieService.getCookie('currentUser'));
        }
        return this.user;
    }

    /**
     * Performs the auth
     * @param email email of user
     * @param password password of user
     */
    login(username: string, password: string) {
        return this.http.post<any>(this.api + `api/token/`, { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.access) {
                    this.user = user;
                    this.user.token = user.access;
                    this.user.refreshToken = user.refresh;
                    this.user.email = user.email;
                    this.user.username = user.username;
                    // store user details and jwt in cookie
                    this.cookieService.setCookie('currentUser', JSON.stringify(user), 1);
                }
                this.refreshToken();
                return user;
            }));
    }

    /**
     * Logout the user
     */
    logout() {
        // remove user from local storage to log user out
        this.cookieService.deleteCookie('currentUser');
        this.user = null;
    }

    // Refreshes the JWT token, to extend the time the user is logged in
    public refreshToken() {
        this.http.post(this.api + 'api/token/refresh/', {refresh: this.currentUser().refreshToken}).subscribe(
            token => {
                console.log(token[this.accessText]);
                this.user.username = 'token acutalizado';
                this.user.refreshToken = token[this.accessText];
                this.cookieService.setCookie('currentUser', JSON.stringify(this.user), 1);
            },
            err => {
                console.log(err);
            }
        );
    }
}

