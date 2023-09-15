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

  kaydetPersonel(item:Personel):Observable<Personel> {
    let body = JSON.stringify(item);
    return this.http.post<Personel>('http://localhost:5200/api/personel/kaydet',body,{headers:{'Content-Type':'application/json'}});
  }

  guncellePersonel(item:Personel):Observable<Personel> {
    let body = JSON.stringify(item);
    return this.http.post<Personel>('http://localhost:5200/api/personel/guncelle',body,{headers:{'Content-Type':'application/json'}});
  }
}
