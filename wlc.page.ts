import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-wlc',
  templateUrl: './wlc.page.html',
  styleUrls: ['./wlc.page.scss'],
})
export class WlcPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  myAction(){
    this.router.navigate(['/home']);
  }
}
