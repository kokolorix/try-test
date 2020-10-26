import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { Projekt } from 'src/app/shared/projekt.interface';
import { AnlageDatenComponent } from '../anlage-daten/anlage-daten.component';
// import {NgForm} from '@angular/forms';
declare global {
  var useTouch: boolean;
}
@Component({
  selector: 'projekt-daten',
  templateUrl: './projekt-daten.component.html',
  styleUrls: ['./projekt-daten.component.scss']
})
export class ProjektDatenComponent implements OnInit {
  @Input() aktuellesProjekt: Projekt;

  public anlage_daten: AnlageDatenComponent;
  public tempProjekt: Projekt = null;
  public onEditingProjekt: boolean = false;
  public useTouch: boolean = false;

  constructor() {
    this.useTouch = is_touch_device();
  }

  ngOnInit(): void {
  }

  startChanging(input_id: any): void {
    if(this.anlage_daten){
      this.anlage_daten.saveChanges();
    }
    this.onEditingProjekt = true;

    this.tempProjekt = JSON.parse(JSON.stringify(this.aktuellesProjekt));// SON.parse(JSON.stringify(...)) -> deep copy
    setTimeout(() => {
      let ai: HTMLElement = document.getElementById(input_id);
    if(ai){
      ai.focus();
    }
  }, 200);
    // this.dialog.open(StandortDialogComponent);
}

 saveChanges() {
    // p.standort.strasse = '';
    if (this.tempProjekt) {
      Object.assign(this.aktuellesProjekt, this.tempProjekt);
      this.tempProjekt = null;
    }
    this.onEditingProjekt = false;
  }
  cancelChanges() {
    this.tempProjekt = null;
    this.onEditingProjekt = false;
  }

}

function is_touch_device(): boolean {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
}
