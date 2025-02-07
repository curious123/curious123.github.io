import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResumeContactInfoComponent } from './../components/resume-contact-info/resume-contact-info.component';
import { ResumeSummaryComponent } from '../components/resume-summary/resume-summary.component';
import { ResumeExperienceComponent } from '../components/resume-experience/resume-experience.component';
import { ResumeEducationComponent } from '../components/resume-education/resume-education.component';
import { ResumeSecurityClearanceComponent } from '../components/resume-security-clearance/resume-security-clearance.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    RouterOutlet,
    ResumeContactInfoComponent,
    ResumeSummaryComponent,
    ResumeExperienceComponent,
    ResumeEducationComponent,
    ResumeSecurityClearanceComponent
  ],
  template: `
    <main>
      <router-outlet />
      <app-resume-contact-info></app-resume-contact-info>
      <app-resume-summary></app-resume-summary>
      <app-resume-experience></app-resume-experience>
      <app-resume-education></app-resume-education>
      <app-resume-security-clearance></app-resume-security-clearance>
    </main>
  `,
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {

}
