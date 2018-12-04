import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hw',
  templateUrl: './hw.page.html',
  styleUrls: ['./hw.page.scss'],
})
export class HwPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  catPower() {
    alert("May the Force be with you!")
  }

}
