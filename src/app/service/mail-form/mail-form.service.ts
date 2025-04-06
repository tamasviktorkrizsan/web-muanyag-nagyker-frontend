import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MailFormService {


  // localhost/github/project/a-web-muanyag-nagyker-backend/backend/service/mail/api.php


  private apiUrl: string = "http://localhost:3000/mail";

  constructor(private http: HttpClient) { }

  sendData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }




}
