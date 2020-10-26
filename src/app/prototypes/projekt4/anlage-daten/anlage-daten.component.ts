import { Component, Input, OnInit } from '@angular/core';
import { Anlage, Projekt } from 'src/app/shared/projekt.interface';
import { AnlageDetailsComponent } from 'src/app/prototypes/projekt4/anlage-details/anlage-details.component';
import { AnlageGridComponent } from 'src/app/prototypes/projekt4/anlage-grid/anlage-grid.component';
import { ProjektDatenComponent } from '../projekt-daten/projekt-daten.component';

@Component({
  selector: 'anlage-daten',
  templateUrl: './anlage-daten.component.html',
  styleUrls: ['./anlage-daten.component.scss']
})
export class AnlageDatenComponent implements OnInit {
  @Input() projekt_daten: ProjektDatenComponent;
  @Input() anlage_details: AnlageDetailsComponent;
  @Input() aktuellesProjekt: Projekt;

  public onEditingAnlage: boolean;
  public tempAnlage: Anlage;


  constructor() {
  }

  ngOnInit(): void {
    this.tempAnlage = JSON.parse(JSON.stringify(this.anlage_details.aktuelleAnlage));// SON.parse(JSON.stringify(...)) -> deep copy
    this.projekt_daten.anlage_daten = this;
  }

  startChanging(input_id:string): void {
    this.onEditingAnlage=true;
    setTimeout(() => {
      let ai: HTMLElement = document.getElementById(input_id);
    if(ai){
      ai.focus();
    }
  }, 200);
  }

  cancelChanges(){
    this.anlage_details.onEditingAnlage=false;
    this.onEditingAnlage=false;
  }

  saveChanges() {
    Object.assign(this.anlage_details.aktuelleAnlage, this.tempAnlage);
    this.anlage_details.onEditingAnlage = false;
    this.onEditingAnlage=false;
  }

}
