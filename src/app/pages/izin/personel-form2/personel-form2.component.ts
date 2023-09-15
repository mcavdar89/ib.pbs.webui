import { Component, Input, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Personel } from 'src/app/models/personel.model';

@Component({
  selector: '[ib-personel-form2]',
  templateUrl: './personel-form2.component.html',
  styleUrls: ['./personel-form2.component.css']
})
export class PersonelForm2Component implements OnInit {
  @Input() data?: Personel;
  @Input() formName?: string;
  frm: FormGroup;

  constructor(private frmBuilder: FormBuilder) {
    this.frm = this.frmBuilder.group({
      ad: ['',[Validators.required,Validators.minLength(3)]],
      soyad: ['',[Validators.required]],
      unvanId: ['',[Validators.required,Validators.pattern("^[0-9]*$")]],
    });
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.frm.patchValue(this.data!!);
    }, 100);
  }


  kaydet() {

    console.log(this.frm);

    debugger;

  }


}
