import { Component, ContentChild, Directive, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { IXpColumn } from 'src/app/models/xp-table.models';
import { XpLookupComponent } from '../xp-lookup/xp-lookup.component';

@Directive({
  selector: 'xp-column',
})
export class XpColumnComponent implements IXpColumn {
  @ContentChild(XpLookupComponent) xpLookup!: XpLookupComponent;
  @Input() public caption: string | null = null;
  @Input() field: string | null = null;
  /**
   * left,
   * center,
   * right
   */
  @Input() textAliginBody: string = "left";
  /**
 * left,
 * center,
 * right
 */
  @Input() textAliginHeader: string = "left";
  @Input() width: number = 5;
  constructor() {

  }
}
