import { Component, OnInit, Input } from '@angular/core';
import { Anlage, Projekt } from 'src/app/shared/projekt.interface';
import { AnlageDetailsComponent } from 'src/app/prototypes/projekt4/anlage-details/anlage-details.component';
import { ProjektDatenComponent } from '../projekt-daten/projekt-daten.component';

@Component({
  selector: 'anlage-grid',
  templateUrl: './anlage-grid.component.html',
  styleUrls: ['./anlage-grid.component.scss']
})
export class AnlageGridComponent implements OnInit {
  @Input() projekt_daten:ProjektDatenComponent;
  @Input() anlage_details:AnlageDetailsComponent;
  @Input() aktuellesProjekt:Projekt;

  public displayedColumns: string[] = ['edit', 'anlage', 'zaehler', 'vnbnr', 'tag', 'ia', 'ab', 'sina'];

  constructor() { }

  ngOnInit(): void {
  }

  hasLeistung(a:Anlage, typ:string):boolean{
    return a.leistungen.filter(x => x.typ.toLocaleLowerCase() === typ.toLocaleLowerCase()).length !== 0;
  }

  startChanging(a: Anlage): void {
    this.anlage_details.aktuelleAnlage = a;
    this.projekt_daten.saveChanges();
    this.anlage_details.onEditingAnlage = true;
  }

}
