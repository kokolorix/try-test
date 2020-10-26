import { Component, OnInit, Input } from '@angular/core';
import { Anlage, Projekt } from 'src/app/shared/projekt.interface';
import { AnlageGridComponent} from 'src/app/prototypes/projekt4/anlage-grid/anlage-grid.component'
import { AnlageDatenComponent} from 'src/app/prototypes/projekt4/anlage-daten/anlage-daten.component'
import { ProjektDatenComponent } from '../projekt-daten/projekt-daten.component';
@Component({
  selector: 'anlage-details',
  templateUrl: './anlage-details.component.html',
  styleUrls: ['./anlage-details.component.scss']
})
export class AnlageDetailsComponent implements OnInit {
  @Input() aktuellesProjekt:Projekt;
  @Input() projekt_daten: ProjektDatenComponent;

  public onEditingAnlage: boolean = false;
  public aktuelleAnlage: Anlage;

  constructor() { }

  ngOnInit(): void {
  }
}
