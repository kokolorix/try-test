import { Component, Input, OnInit } from '@angular/core';
import { Anlage, Projekt } from 'src/app/shared/projekt.interface';
import { AnlageDatenComponent } from 'src/app/prototypes/projekt4/anlage-daten/anlage-daten.component';
import { AnlageGridComponent } from 'src/app/prototypes/projekt4/anlage-grid/anlage-grid.component';

@Component({
  selector: 'anlage-details',
  templateUrl: './anlage-details.component.html',
  styleUrls: ['./anlage-details.component.scss']
})
export class AnlageDetailsComponent implements OnInit {
  @Input() anlage_daten: AnlageDatenComponent;
  @Input() aktuellesProjekt: Projekt;

  public tempAnlage: Anlage;

  constructor() {
  }

  ngOnInit(): void {
    this.tempAnlage = this.anlage_daten.aktuelleAnlage;
  }

  cancelChanges(){
    this.anlage_daten.onEditingAnlage=false;
  }

  saveChanges() {
    this.anlage_daten.aktuelleAnlage = this.tempAnlage;
    this.anlage_daten.onEditingAnlage = false;
  }

}
