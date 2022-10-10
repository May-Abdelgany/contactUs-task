import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SendMessageService {
  constructor(private http: HttpClient) {}
  sendMessage(data: any): Observable<any> {
    return this.http.post('https://takidapp.com:8007/api/ContactUs/Add', data);
  }
}
