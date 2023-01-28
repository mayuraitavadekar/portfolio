import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    
  }

  scrollToAboutMe(): void {
    this.document.getElementById("aboutme")?.scrollIntoView({behavior: 'smooth'});
  }

  scrollToExperience(): void {
    this.document.getElementById("experience")?.scrollIntoView({behavior: 'smooth'});
  }

  scrollToSkills(): void {
    this.document.getElementById("skills")?.scrollIntoView({behavior: 'smooth'});
  }

  scrollToProjects(): void {
    this.document.getElementById("projects")?.scrollIntoView({behavior: 'smooth'});
  }

  scrollToContact(): void {
    this.document.getElementById("contact")?.scrollIntoView({behavior: 'smooth'});
  }
}
