import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css'],
})
export class DialogBoxComponent {
  //@Input() closed = true;
  @Input() opened!: boolean;
  @Output() openedChange = new EventEmitter<boolean>();
  
  public toCart = 'Go to Cart';
  public continueShop = 'Continue shopping';

  toggleDialogBox() {
    this.opened = false;
    this.openedChange.emit(this.opened);
  }
}
