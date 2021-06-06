import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'xp-filter',
  template: '',
})
export class XpFilterComponent implements OnInit {
  @Input() visiable: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
