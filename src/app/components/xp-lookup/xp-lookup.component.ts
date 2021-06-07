import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'xp-lookup',
  template: '',
})
export class XpLookupComponent {
  @Input() dataSource: any[] = [];
  @Input() valueExpr: string = '';
  @Input() displayExpr: string = '';
  constructor() { }

  getValue(item: any) {
    return this.dataSource.find(el => el[this.valueExpr] === item)[this.displayExpr];
  }
}
