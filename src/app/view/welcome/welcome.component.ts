import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private rout: Router) {
  }

  ngOnInit(): void {
  }

  LoadSignIn(): void {
    this.rout.navigateByUrl('/sign-in');
  }

  LoadSignUp(): void {
    this.rout.navigateByUrl('/sign-up');
  }
}
