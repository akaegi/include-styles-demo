import { Component, OnInit } from '@angular/core';
import { IncludeStyles } from '@codebakery/origami/styles';

@IncludeStyles('app-colors')
@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
