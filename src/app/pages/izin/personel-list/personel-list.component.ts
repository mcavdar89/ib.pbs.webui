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
  formVisible:boolean = false;

  constructor(private personelService: PersonelService) { }
  ngOnInit(): void {

    console.log("Adım 1");
    this.personelService.getPersonelList().subscribe(data => {
      this.personelList = data;
      console.log("Adım 2");
    });
    console.log("Adım 3");
  }


  setPersonelForm(item: Personel){
    this.formVisible = true;
  }


}
