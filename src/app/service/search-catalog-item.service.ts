import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchCatalogItemService {

  // localhost/github/project/a-web-muanyag-nagyker-backend/backend/service/mail/api.php

  // http://localhost/github/project/a-web-muanyag-nagyker-backend/backend/service/catalog/api.php

  private apiUrl: string = "http://localhost:3000/catalog";

  constructor(private http: HttpClient) { }

  sendData(data: any): Observable<any> {

    console.log(data);

    return this.http.post(this.apiUrl, data);
  }

}
