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
  formVisible: boolean = false;

  formAdi: string = "personel-form2";


  personel?: Personel;


  constructor(private personelService: PersonelService) { }
  ngOnInit(): void {

    console.log("Adım 1");
    this.personelService.getPersonelList().subscribe(data => {
      this.personelList = data;
      console.log("Adım 2");
    });
    console.log("Adım 3");
  }


  setPersonelForm(item: Personel) {
    this.personel = undefined;
    setTimeout(() => {
      this.personel = item;
      this.formVisible = true;
    }, 100);
  }
  setList(item: Personel) {
    let index = this.personelList.findIndex(x => x.id == item.id);
    if (index > -1) {
      this.personelList[index] = item;
    }else{
      this.personelList.push(item);
    }

  }

}
