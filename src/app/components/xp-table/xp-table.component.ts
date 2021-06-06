import { AfterViewChecked, ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { IXpColumn, XpColumn } from 'src/app/models/xp-table.models';
import { XpUtilityService } from 'src/app/services/xp-utility.service';
import { XpColumnComponent } from '../xp-column/xp-column.component';
import { XpFilterComponent } from '../xp-filter/xp-filter.component';

@Component({
  selector: 'xp-table',
  templateUrl: './xp-table.component.html',
  styleUrls: ['./xp-table.component.scss'],
})
export class XpTableComponent implements OnInit {
  @Input() dataSource: any[] = [];
  @ContentChildren(XpColumnComponent) xpColumns!: QueryList<XpColumnComponent>;
  @ContentChild(XpFilterComponent) xpFilter!: XpFilterComponent;

  columns: XpColumn[] = [];
  serializedColumns(): XpColumn[] {
    if (this.columns && this.columns.length === this.xpColumns.length) {
      return this.columns;
    }
    const result: XpColumn[] = [];
    this.xpColumns.forEach(el => result.push(new XpColumn(el)))
    this.columns = [...result];
    return this.columns;
  }

  constructor() { }


  ngOnInit(): void {
  }

  getColumn(row: any, key: any | string): string {
    const value: any = row[key];
    return value ? value : key;
  }
  getField(row: any, key: any | string): string {
    return row[key];
  }

}
