import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Personel } from 'src/app/models/personel.model';
import { PersonelService } from 'src/app/services/personel.service';

@Component({
  selector: '[ib-personel-form2]',
  templateUrl: './personel-form2.component.html',
  styleUrls: ['./personel-form2.component.css']
})
export class PersonelForm2Component implements OnInit {
  @Input() data?: Personel;
  @Input() formName?: string;
  @Output() setData:EventEmitter<Personel> = new EventEmitter<Personel>();
  frm: FormGroup;
  isFormSubmitted: boolean = false;

  constructor(private frmBuilder: FormBuilder,
    private messageService: MessageService,
    private personelService: PersonelService
  ) {
    this.frm = this.frmBuilder.group({
      id: [],
      ad: ['', [Validators.required, Validators.minLength(3)]],
      soyad: ['', [Validators.required]],
      unvanId: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    });
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.frm.patchValue(this.data!!);
    }, 100);
  }


  kaydet() {
    this.isFormSubmitted = true;
    if (this.frm.invalid) {
      this.messageService.add({ severity: 'error', summary: 'Hata!', detail: 'Formdaki hataları giderin' });
      return;
    }
    let item = this.frm.value as Personel;
    debugger;
    if (!item.id || item.id == 0) {
      this.personelService.kaydetPersonel(item).subscribe(data => {
        this.setKaydet(data);
      });
    }else{
      
      this.personelService.guncellePersonel(item).subscribe(data => {
       this.setKaydet(data);
      });
    }


  }

  setKaydet(item: Personel) {
    this.messageService.add({ severity: 'success', summary: 'Başarılı!', detail: 'Kayıt başarılı' });
    this.setData?.emit(item);
  }

}
