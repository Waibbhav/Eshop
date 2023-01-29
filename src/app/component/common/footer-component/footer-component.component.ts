import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.scss']
})
export class FooterComponentComponent implements OnInit {

  subscribeform!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.subscribeform = this.fb.group({
      email: [''],
    });
  }

  ngOnInit(): void {}

  submit() {
    console.log('form_data:', this.subscribeform.value);
    alert('Subscribed successfully');
  }

}
