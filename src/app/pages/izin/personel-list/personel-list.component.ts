import { Component, OnInit } from '@angular/core';
import { Personel } from 'src/app/models/personel.model';
import { PersonelService } from 'src/app/services/personel.service';


@Component({
  selector: 'app-personel-list',
  templateUrl: './personel-list.component.html',
  styleUrls: ['./personel-list.component.css']
})
export class PersonelListComponent implements OnInit {
  personelList: Personel[] = [];


  constructor(private personelService: PersonelService) { }
  ngOnInit(): void {
    this.personelService.getPersonelList().subscribe(data => {
      this.personelList = data;
    });
  }

}
