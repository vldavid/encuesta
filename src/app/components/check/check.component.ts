import { Component } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html'
})
export class CheckComponent {
  title = 'Check';

  constructor(){
  }

  onSubmit(checkForm){
    checkForm.reset();
  }

}
