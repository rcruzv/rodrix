import { Component, OnInit } from '@angular/core';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faFingerprint, faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-index-header',
  templateUrl: './index-header.component.html',
  styleUrls: ['./index-header.component.css']
})
export class IndexHeaderComponent implements OnInit {

  //#region [ Icons ]
  faBriefcase = faBriefcase;
  faLocationDot = faLocationDot;
  faFingerprint = faFingerprint;

  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faGithub = faGithub;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faLinkedin = faLinkedin;
  //#endregion

  constructor() { }

  ngOnInit() {
  }

}
