import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Realisation} from '../model/realisation';

@Component({
  selector: 'app-realisation-card',
  templateUrl: './realisation-card.component.html',
  styleUrls: ['./realisation-card.component.css']
})
export class RealisationCardComponent implements OnInit {

  constructor() { }
  @HostBinding('class') hostclass = 'col s12 m6 l4 resume-card';

  @Input() realisation: Realisation;
  ngOnInit(): void {
  }

}
