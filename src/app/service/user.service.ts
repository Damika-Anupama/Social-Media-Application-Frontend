import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '@src/environments/environment';
import {User} from '@src/app/model/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  createAccount(uname: string, email: string, sex: string, pwd: string): Observable<HttpResponse<any>> {
    let createdAt = new Date();
    // @ts-ignore
    createdAt = createdAt.toLocaleString();
    console.log(createdAt);
    let gender: string;
    if (sex === 'Male') {
      gender = 'MALE';
    } else if (sex === 'Female') {
      gender = 'FEMALE';
    } else {
      gender = 'OTHER';
    }

    const body: FormData = new FormData();
    body.append('username', uname);
    body.append('password', pwd);
    body.append('email', email);
    // @ts-ignore
    body.append('gender', gender);
    // @ts-ignore
    body.append('createdAt', createdAt);
    // @ts-ignore
    body.append('role', 'USER');
    body.append('shortDes', 'new Buddy 🐰');
    return this.http.post<HttpResponse<any>>(environment.baseUrl + `/api/v1/users`, body, {
      observe: 'response'
    });
  }

  findUser(query: string): Observable<string> {
    const httpParams = new HttpParams().append('q', query)
      .append('ignoreProgressBar', '');
    return this.http.get<string>(environment.baseUrl + `/api/v1/users/name/` + query);
  }

  getUserDetailsById(query: string): Observable<User> {
    const httpParams = new HttpParams().append('q', query);
    return this.http.get<User>(environment.baseUrl + `/api/v1/users/${query}`, {
      params: httpParams
    });
  }

  authenticate(uname: string, pwd: string): Observable<any> {
    const body = {
      username: uname,
      password: pwd
    };
    return this.http.post(environment.baseUrl + `/api/v1/authenticate`, body);
  }

  updateUser(userId: string | null, profilePic: string, shortDes: string, username: string, email: string, phoneNumber: string): Observable<any> {
    const body: FormData = new FormData();
    // @ts-ignore
    body.append('userId', userId);
    body.append('username', username);
    body.append('email', email);
    // @ts-ignore
    body.append('shortDes', shortDes);
    body.append('profilePic', profilePic);
    body.append('phoneNum', phoneNumber);
    return this.http.put<User>(environment.baseUrl + `/api/v1/users/` + userId, body);
  }
}
