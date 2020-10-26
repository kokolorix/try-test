import { Component, OnInit, Input } from '@angular/core';
import { Anlage, Projekt } from 'src/app/shared/projekt.interface';
import { AnlageGridComponent} from 'src/app/prototypes/projekt4/anlage-grid/anlage-grid.component'
import { AnlageDetailsComponent} from 'src/app/prototypes/projekt4/anlage-details/anlage-details.component'
@Component({
  selector: 'anlage-daten',
  templateUrl: './anlage-daten.component.html',
  styleUrls: ['./anlage-daten.component.scss']
})
export class AnlageDatenComponent implements OnInit {
  @Input() aktuellesProjekt:Projekt;

  public onEditingAnlage: boolean = false;
  public aktuelleAnlage: Anlage;

  constructor() { }

  ngOnInit(): void {
  }
}
