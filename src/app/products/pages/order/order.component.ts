import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  public name:string = 'Alberto';
  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero | null = null;

  public heros:Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.green,
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green,
    },
  ]

  toggleUpperCase():void{
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder( value: keyof Hero ):void{
    this.orderBy = value
  }



  // solo es codigo para el html

  public codeSnippet: string = `

  import { Pipe, PipeTransform } from '@angular/core';
  import { Hero } from '../interfaces/hero.interfaces';
  
  @Pipe({
    name: 'sortBy'
  })
  export class SortByPipe implements PipeTransform {
  
    transform(heroes: Hero[], sortBy?: keyof Hero | null ): Hero[] {
  
      switch (sortBy) {
        case 'name':
          return heroes.sort ( (a,b)=> (a.name > b.name)? 1 : -1 )
  
        case 'canFly':
          return heroes.sort ( (a,b)=> (a.canFly > b.canFly)? 1 : -1 )
          
        case 'color':
          return heroes.sort ( (a,b)=> (a.color > b.color)? 1 : -1 )
  
        default:
          return heroes
      }
    }
  
  }

`

}
