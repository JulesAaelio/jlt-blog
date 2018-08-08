import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation-arrow',
  templateUrl: './navigation-arrow.component.html',
  styleUrls: ['./navigation-arrow.component.css']
})
export class NavigationArrowComponent implements OnInit {

  @Input() direction = 'up';
  @Input() target = '';

  constructor() {
  }

  ngOnInit() {
  }

  updateHash() {
    location.hash = '#' + this.target;
  }
}
