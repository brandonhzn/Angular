import { Component, OnInit, Input } from '@angular/core';
import { Guia } from '../guiam';
@Component({
  selector: 'app-guia-detail',
  templateUrl: './guia-detail.component.html',
  styleUrls: ['./guia-detail.component.css']
})
export class GuiaDetailComponent implements OnInit {
  @Input() guia: Guia;
  constructor() { }

  ngOnInit() {
  }

}
