import { Component } from '@angular/core';
import { TextComponent } from './components/text/text.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [TextComponent]
})
export class AppComponent {
  title = 'app';
  tipo: string = '';

  constructor(textComponent: TextComponent){
  }

  fnText(){
    this.tipo = 'T';
  }

  fnCheck(){
    this.tipo = 'C';
  }

  fnSelect(){
    this.tipo = 'S';
  }
}
