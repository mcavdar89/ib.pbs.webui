import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personel } from '../models/personel.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonelService {

  constructor(private http: HttpClient) { }

  getPersonelList():Observable<Personel[]> {
    return this.http.get<Personel[]>('http://localhost:5200/api/personel/get');
  }


}
