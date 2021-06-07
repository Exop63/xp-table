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
      surname: 'Bağlan',
      age: 14,
      tel: "+90(532) 297 65 42",
      status: 1
    },
    {
      name: 'Mehmet',
      surname: 'Bağlan',
      age: 5,
      tel: "+90(532) 297 65 42",

      status: 2

    },
    {
      name: 'Salih',
      surname: 'Bağlan',
      age: 56,
      tel: "+90(532) 297 65 42",
      status: 2
    },
    {
      name: 'Hakkan',
      surname: 'Bağlan',
      age: 44,
      tel: "+90(532) 297 65 42",
      status: 1
    },{
      name: 'Abdullah',
      surname: 'Bağlan',
      age: 14,
      tel: "+90(532) 297 65 42",
      status: 1
    },
    {
      name: 'Mehmet',
      surname: 'Bağlan',
      age: 5,
      tel: "+90(532) 297 65 42",

      status: 2

    },
    {
      name: 'Salih',
      surname: 'Bağlan',
      age: 56,
      tel: "+90(532) 297 65 42",
      status: 2
    },
    {
      name: 'Hakkan',
      surname: 'Bağlan',
      age: 44,
      tel: "+90(532) 297 65 42",
      status: 1
    },{
      name: 'Abdullah',
      surname: 'Bağlan',
      age: 14,
      tel: "+90(532) 297 65 42",
      status: 1
    },
    {
      name: 'Mehmet',
      surname: 'Bağlan',
      age: 5,
      tel: "+90(532) 297 65 42",

      status: 2

    },
    {
      name: 'Salih',
      surname: 'Bağlan',
      age: 56,
      tel: "+90(532) 297 65 42",
      status: 2
    },
    {
      name: 'Hakkan',
      surname: 'Bağlan',
      age: 44,
      tel: "+90(532) 297 65 42",
      status: 1
    },{
      name: 'Abdullah',
      surname: 'Bağlan',
      age: 14,
      tel: "+90(532) 297 65 42",
      status: 1
    },
    {
      name: 'Mehmet',
      surname: 'Bağlan',
      age: 5,
      tel: "+90(532) 297 65 42",

      status: 2

    },
    {
      name: 'Salih',
      surname: 'Bağlan',
      age: 56,
      tel: "+90(532) 297 65 42",
      status: 2
    },
    {
      name: 'Hakkan',
      surname: 'Bağlan',
      age: 44,
      tel: "+90(532) 297 65 42",
      status: 1
    },{
      name: 'Abdullah',
      surname: 'Bağlan',
      age: 14,
      tel: "+90(532) 297 65 42",
      status: 1
    },
    {
      name: 'Mehmet',
      surname: 'Bağlan',
      age: 5,
      tel: "+90(532) 297 65 42",

      status: 2

    },
    {
      name: 'Salih',
      surname: 'Bağlan',
      age: 56,
      tel: "+90(532) 297 65 42",
      status: 2
    },
    {
      name: 'Hakkan',
      surname: 'Bağlan',
      age: 44,
      tel: "+90(532) 297 65 42",
      status: 1
    },
  ];

  statusLookup: any[] = [{ id: 1, text: 'Açık' }, { id: 2, text: 'Kapalı' }];

  add() {
    this.data.push({
      name: 'Add',
      surname: 'Test'
    })
  }
}
