import { Component, OnInit } from '@angular/core';
import { IncludeStyles } from '@codebakery/origami/styles';

@IncludeStyles('app-colors')
@Component({
  selector: 'app-sub1',
  templateUrl: './sub1.component.html',
  styleUrls: ['./sub1.component.css']
})
export class Sub1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
