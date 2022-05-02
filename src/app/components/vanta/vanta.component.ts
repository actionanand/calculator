import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vanta',
  templateUrl: './vanta.component.html',
  styleUrls: ['./vanta.component.scss']
})
export class VantaComponent implements OnInit {

  todaySdate = "Today's date is " + new Date().toUTCString().slice(5, 16) + '.';
  todayStime = 'And local time is ' + new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) + '.';

  textArray = ['Anand', 'Raja', 'Programming', 'is', 'an', 'art'];

  typeDeleteArray = [
    'Hello viewers...',
    'You can write anything for display...',
    this.todaySdate,
    this.todayStime,
    'Programming is an art 💚'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
