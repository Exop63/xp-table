import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { XpTableComponent } from './components/xp-table/xp-table.component';
import { XpColumnComponent } from './components/xp-column/xp-column.component';
import { XpFilterComponent } from './components/xp-filter/xp-filter.component';
import { from } from 'rxjs';
import { XpLookupComponent } from './components/xp-lookup/xp-lookup.component';

@NgModule({
  declarations: [
    AppComponent,
    XpTableComponent,
    XpColumnComponent,
    XpFilterComponent,
    XpLookupComponent,

  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
