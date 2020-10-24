import { Component, OnInit, Input } from '@angular/core';
import { Anlage, Projekt } from 'src/app/shared/projekt.interface';
import { AnlageDatenComponent } from 'src/app/prototypes/projekt4/anlage-daten/anlage-daten.component';

@Component({
  selector: 'anlage-grid',
  templateUrl: './anlage-grid.component.html',
  styleUrls: ['./anlage-grid.component.scss']
})
export class AnlageGridComponent implements OnInit {
  @Input() anlage_daten:AnlageDatenComponent;
  @Input() aktuellesProjekt:Projekt;

  public displayedColumns: string[] = ['edit', 'anlage', 'zaehler', 'vnbnr', 'tag', 'ia', 'ab', 'sina'];

  constructor() { }

  ngOnInit(): void {
  }

  hasLeistung(a:Anlage, typ:string):boolean{
    return a.leistungen.filter(x => x.typ.toLocaleLowerCase() === typ.toLocaleLowerCase()).length !== 0;
  }
  
  startChanging(a: Anlage): void {
    this.anlage_daten.aktuelleAnlage = a;
    this.anlage_daten.onEditingAnlage = true;
  }

}
