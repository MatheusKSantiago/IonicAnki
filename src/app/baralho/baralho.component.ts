import { Component, input, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle} from '@ionic/angular/standalone';

@Component({
  selector: 'app-baralho',
  templateUrl: './baralho.component.html',
  styleUrls: ['./baralho.component.scss'],
  imports: [IonCard,IonCardHeader,IonCardTitle,IonCardContent]
})
export class BaralhoComponent {
  readonly title = input<string>();
  readonly pending = input<boolean>();
  readonly total = input<number>();
  constructor() { }

  

}
