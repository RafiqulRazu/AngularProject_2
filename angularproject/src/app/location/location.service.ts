import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from './location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private baseUrl:string = "http://localhost:3000/locations";

  constructor(private httpClient:HttpClient) {}


  getAllLocation():Observable<any>{
    return this.httpClient.get(this.baseUrl)
  }


  createlocation(location: Location): Observable<any> {
    return this.httpClient.post(this.baseUrl, location);
  }

  deleteLocation(id:string):Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id);
  }

  getById(id: string): Observable<any> {

    return this.httpClient.get(this.baseUrl + "/" + id);

  }
   
}
