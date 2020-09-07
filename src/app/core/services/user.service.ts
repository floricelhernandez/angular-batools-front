import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/auth.models';

@Injectable({ providedIn: 'root' })
export class UserProfileService {
    // http options used for making API calls
    private httpOptions: any;

    // the actual JWT token
    public token: string;

    // the token expiration date
    public tokenExpires: Date;

    // the username of the logged in user
    public username: string;

    // error messages received from the login attempt
    public errors: any = [];
    private tokenText = 'token';
    private errorText = 'error';

    constructor(private http: HttpClient) {
        this.httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
    }
    getAll() {
        return this.http.get<User[]>(`/api/login`);
    }
}
