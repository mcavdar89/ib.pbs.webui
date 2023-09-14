import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Personel } from 'src/app/models/personel.model';

@Component({
  selector: 'ib-personel-form',
  templateUrl: './personel-form.component.html',
  styleUrls: ['./personel-form.component.css']
})
export class PersonelFormComponent implements OnInit {
  @Input() data: Personel = new Personel();
  @ViewChild('frm') frm?: NgForm;
  isFormSubmitted: boolean = false;

  ngOnInit(): void {
    console.log("form");
    console.log(this.frm);
    setTimeout(() => {
      this.frm?.control.patchValue(this.data);
    }, 100);
  }

  kaydet(item: Personel) {
    this.isFormSubmitted = true;
    if (this.frm?.invalid)
      return;

    debugger;
    console.log(item);
    console.log(this.frm);
  }


}
