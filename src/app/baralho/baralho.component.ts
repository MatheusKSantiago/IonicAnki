import { Component, input} from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle,IonGrid,IonRow,IonCol} from '@ionic/angular/standalone';

@Component({
  selector: 'app-baralho',
  templateUrl: './baralho.component.html',
  styleUrls: ['./baralho.component.scss'],
  imports: [IonCard,IonCardHeader,IonCardTitle,IonCardContent,IonGrid,IonRow,IonCol]
})
export class BaralhoComponent {
  readonly title = input<string>();
  readonly pending = input<boolean>();
  readonly total = input<number>();
  constructor() { }

  

}
