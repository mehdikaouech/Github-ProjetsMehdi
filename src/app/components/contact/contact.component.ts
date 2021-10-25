import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: any = {};
  contactForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private contactService:ContactService,
    private router:Router) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
    
      objet: ['']
    })
  }

  addContact() {
    console.log('here object',this.contact);
    this.contactService.addContact(this.contact).subscribe(
      ()=>{
        console.log('Contact added successfully');
        this.router.navigate(['/']);
      } 
    )
  }

}
