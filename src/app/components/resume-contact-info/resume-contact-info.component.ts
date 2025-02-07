import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-contact-info',
  templateUrl: './resume-contact-info.component.html',
  styleUrls: ['./resume-contact-info.component.css']
})
export class ResumeContactInfoComponent implements OnInit {
  contactInfo = {
    email: 'sewardge@gmail.com',
    phone: '580-647-2916',
    linkedin: 'https://www.linkedin.com/in/gregory-seward-0a93326a/',
    github: '.https://curious123.github.io/',
  };

  constructor() { }

  ngOnInit(): void {
    // Initialization logic can be added here if needed
  }
}
