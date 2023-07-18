import { Component } from '@angular/core';

@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.css'],
})
export class LayerComponent {
  style: any;
  handleMenueChange(margin: string) {
    // console.log(margin);

    this.style = {
      marginRight: margin,
      transition: '.6s all',
    };
  }
}
