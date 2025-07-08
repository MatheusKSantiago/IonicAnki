import { Component, inject } from '@angular/core';
import { IonGrid,IonRow,IonCol,IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar,
  IonCardTitle,IonFab,IonFabButton,IonFabList,IonIcon, IonButton,IonLabel} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, albumsOutline, readerOutline } from 'ionicons/icons';
import { BaralhoComponent } from '../baralho/baralho.component';
import { Baralho } from '../baralho/baralho';
import { BaralhoService } from '../baralho/baralho.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonSearchbar,IonCardTitle,IonGrid,IonRow,IonCol,IonFab,
    IonFabButton,IonFabList,IonIcon,IonButton,BaralhoComponent,IonLabel],
})
export class HomePage{
  private readonly baralhoService: BaralhoService = inject(BaralhoService);
  private  _baralhos?: Baralho[];
  protected  baralhos?: Baralho[];
  

  constructor() {
    this.baralhoService.getBaralhos().subscribe(baralhos =>{ 
      this._baralhos = baralhos.sort((a,b) => {
        const diff = Number(b.pending) - Number(a.pending);
        if(diff != 0) return diff;
        return a.title.localeCompare(b.title);
      });
      this.baralhos = [...this._baralhos]
    });

    addIcons({
      add,
      albumsOutline ,
      readerOutline
    })
  }

  filtrarBaralhos(e: Event): void{
    const input = e.target as HTMLInputElement;
    this.baralhos = this._baralhos?.filter(baralho => baralho.title.toLowerCase().startsWith(input.value.toLowerCase()))
  }
}
