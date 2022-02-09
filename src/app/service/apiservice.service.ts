import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  baseUrl = 'https://cdn-api.co-vin.in/api/v2/admin/location/states'

  constructor(private http: HttpClient) { }
  
  getStates():Observable<any>{
    return this.http.get(this.baseUrl)
  }

  // login(data:any):Observable<any>{
  //   return this.http.post(this.baseUrl,data)
  // }
  
}
