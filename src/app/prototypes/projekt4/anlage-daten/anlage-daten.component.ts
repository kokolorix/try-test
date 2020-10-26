import { Component, Input, OnInit } from '@angular/core';
import { Anlage, Projekt } from 'src/app/shared/projekt.interface';
import { AnlageDetailsComponent } from 'src/app/prototypes/projekt4/anlage-details/anlage-details.component';
import { AnlageGridComponent } from 'src/app/prototypes/projekt4/anlage-grid/anlage-grid.component';

@Component({
  selector: 'anlage-daten',
  templateUrl: './anlage-daten.component.html',
  styleUrls: ['./anlage-daten.component.scss']
})
export class AnlageDatenComponent implements OnInit {
  @Input() anlage_details: AnlageDetailsComponent;
  @Input() aktuellesProjekt: Projekt;

  public onEditingAnlage: boolean;
  public tempAnlage: Anlage;


  constructor() {
  }

  ngOnInit(): void {
    this.tempAnlage = this.anlage_details.aktuelleAnlage;
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
    this.anlage_details.aktuelleAnlage = this.tempAnlage;
    this.anlage_details.onEditingAnlage = false;
    this.onEditingAnlage=false;
  }

}
