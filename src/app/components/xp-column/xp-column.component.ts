import { Component, Directive, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { IXpColumn } from 'src/app/models/xp-table.models';

@Directive({
  selector: 'xp-column',
})
export class XpColumnComponent implements IXpColumn {

  @Input() public caption: string | null = null;
  @Input() field: string | null = null;

  constructor() { }
}
