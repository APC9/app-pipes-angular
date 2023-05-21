import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {

  public nameLower: string = 'alberto';
  public nameUpper: string = 'ALBERTO';
  public fullName: string = 'AlBeRtO pEñA';
  public customDate:Date = new Date();

}
