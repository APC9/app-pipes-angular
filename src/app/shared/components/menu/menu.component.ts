import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  providers: [MessageService],
  styles: [
  ]
})
export class MenuComponent implements OnInit{

  public items: MenuItem[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
      this.items = [
          {
              label: 'Pipes de Angular',
              icon: 'pi pi-desktop',
              items: [
                  {
                      label: 'Textos y fechas',
                      icon: 'pi pi-fw pi-align-left',
                      routerLink: '/'
                  },
                  {
                      label: 'Numeros',
                      icon: 'pi pi-dollar',
                      routerLink: '/numbers'
                  },
                  {
                    label: 'No comunes',
                    icon: 'pi pi-globe',
                    routerLink: '/uncommon'
                  }
              ]
          },
          {
            label: 'Pipes personalizados',
            icon: 'pi pi-cog',
            items: [
              {
                label: 'Otros elementos',
                icon: 'pi pi-cog',
                routerLink: '/custom'
              }
            ]
          }
      ];
  }

  update() {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
  }

  delete() {
      this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
  }

}
