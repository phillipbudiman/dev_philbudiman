import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  isVisible = true;

  url="https://script.google.com/macros/s/AKfycbzLZJDYNN3m7tk56Sjx15_CeBoFPhK7hbYQryKS8za51lHsjLBn/exec";  

  formData = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.minLength(10), Validators.maxLength(10)]],
    message: ['', Validators.required],
  });

  onSubmit(): void {
    console.log(this.formData.value);
    console.log(this.formData.valid);
    console.log(typeof(this.formData.value));

    this.isVisible = false;

    let name = encodeURIComponent(this.formData.value['name'].trim());
    let email = encodeURIComponent(this.formData.value['email'].trim());
    let phone = encodeURIComponent(this.formData.value['phone']);
    let message = encodeURIComponent(this.formData.value['message'].trim());

    let payload = `name=${name}&email=${email}&phone=${phone}&message=${message}`;
    
    this.http.post(this.url, payload, {headers: 
      {
      'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).subscribe(response => {
        // console.log(response);
    });
      this.formData.reset();
    }
}
