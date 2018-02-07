import { Component } from '@angular/core';
import { TextComponent } from '../text/text.component'

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  providers: [TextComponent]
})
export class SelectComponent {
  title = 'Select';

  constructor(textComponent: TextComponent){
  }
  
  onSubmit(selectForm){
    selectForm.reset();
  }

}
