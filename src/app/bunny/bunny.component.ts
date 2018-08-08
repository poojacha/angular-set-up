import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bunny',
  templateUrl: './bunny.component.html',
  styleUrls: ['./bunny.component.css']
})
export class BunnyComponent implements OnInit {
  @Input() componentTitle: string;
  @Input() imageSrc: string;
  constructor() { };
  ngOnInit() {
  };
}
