import { Component } from '@angular/core';
import { Options } from '../../models/options.model';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html'
})
export class TextComponent {
  public title;
  public opt: Options;

  public optArr: Options[] = new Array<Options>();

  constructor(
	){
		this.title = 'Opciones';
		this.opt = new Options('');
	}

  onSubmit(inputForm){
      let item = new Options('');
      item.name = this.opt.name;

      this.opt.name = this.opt.name
      this.optArr.push(item);
      inputForm.reset();

  }

}
