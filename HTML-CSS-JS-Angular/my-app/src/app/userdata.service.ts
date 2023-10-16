import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  url=' http://localhost:3000/products';
  constructor(private http:HttpClient) { 
    
  }
  users()
    {
      return this.http.get(this.url);
    }

    saveUser(data:any){
      return this.http.post(this.url,data);
    }

    
}
