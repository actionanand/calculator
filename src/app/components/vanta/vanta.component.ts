import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vanta',
  templateUrl: './vanta.component.html',
  styleUrls: ['./vanta.component.scss']
})
export class VantaComponent implements OnInit {

  textArray = ['Anand', 'Raja', 'Programming', 'is', 'an', 'art'];

  constructor() { }

  ngOnInit(): void {
  }

}