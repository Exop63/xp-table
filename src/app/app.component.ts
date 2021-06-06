import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'xp-table';

  data: any[] = [
    {
      name: 'Abdullah',
      surname: 'Bağlan'
    }
  ];

  add() {
    this.data.push({
      name:'Add',
      surname:'Test'
    })
  }
}
