import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchCatalogItemService {

  // localhost/github/project/a-web-muanyag-nagyker-backend/backend/service/mail/api.php

  private apiUrl: string = "http://localhost/github/project/a-web-muanyag-nagyker-backend/backend/service/catalog/api.php";

  constructor(private http: HttpClient) { }

  sendData(data: any): Observable<any> {
    return this.http.get(this.apiUrl, data);
  }

}
