import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {environment} from '@src/environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {


  constructor(private http: HttpClient) {
  }

  saveSuggestion(message: string, priority: string, feeling: string): Observable<HttpResponse<any>> {
    const user = sessionStorage.getItem('userId');
    const body = {
      message: message,
      priority: priority,
      feeling: feeling,
      user: user,
    };
    console.log(body)
    return this.http.post<any>(environment.baseUrl + `/api/v1/suggestion`, body);
  }

  getAllSuggestions(): Observable<any> {
    return this.http.get(environment.baseUrl + `/api/v1/suggestion`);
  }
}
