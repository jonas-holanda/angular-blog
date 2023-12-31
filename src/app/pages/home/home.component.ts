import { Component } from '@angular/core';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  bigCard: any[] = [];
  smallCard: any[] = [];
  constructor() {
    if (dataFake) {
      this.bigCard = dataFake;
      dataFake.map(values => {
        if (values.id != 1) {
          this.smallCard.push(values);
        }
      });

    }
  
  }
}
