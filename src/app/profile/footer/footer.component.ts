import {Component} from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls : ['./footer.component.css'],
})
export class FooterComponent{
  public l : string;
  constructor(){
    this.l = "asdasdasdasd";
  }
}
