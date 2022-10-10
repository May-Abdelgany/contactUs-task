import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SendMessageService } from './../../services/send-message.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  message: string = '';
  contactUs: FormGroup = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.pattern(
          '^[a-zA-Z0-9]+ {1}[a-zA-Z0-9]{3,} {1}[a-zA-Z0-9]{1,}$'
        ),
      ],
    ],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });
  allData: any = {};
  constructor(
    private fb: FormBuilder,
    private _sendMessage: SendMessageService
  ) {}

  ngOnInit(): void {}
  send(contactUs: FormGroup) {
    this.allData.firstName = contactUs.value.name.split(' ')[0];
    this.allData.midleName = contactUs.value.name.split(' ')[1];
    this.allData.lastName = contactUs.value.name.split(' ')[2];
    this.allData.email = contactUs.value.email;
    this.allData.description = contactUs.value.message;
    this._sendMessage.sendMessage(this.allData).subscribe((res) => {
      console.log(res)
      if (res) {
        this.message = 'Done';
        contactUs.reset();
        setTimeout(() => {
          this.message = '';
        }, 5000);
      }
    });
  }
}
