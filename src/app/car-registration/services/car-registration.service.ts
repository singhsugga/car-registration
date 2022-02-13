import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarRegistrationService {

  constructor(private http:HttpClient) { }


  fetchCars(){
    return this.http.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/Cars9096be5.json')
  }
  fetchParts(){
    return this.http.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/ListOfAutoParts1aaa4e5.json')
  }
}
