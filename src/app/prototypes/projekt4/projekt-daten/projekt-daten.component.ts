import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { Projekt } from 'src/app/shared/projekt.interface';
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

  public tempProjekt: Projekt = null;
  public onEditingProjekt: boolean = false;
  public useTouch: boolean = false;
  public mo_gem_par: boolean = false;
  public aktuellerInput: string = null;

  constructor() {
    this.useTouch = is_touch_device();
  }

  ngOnInit(): void {
  }

  startChanging(e: any): void {
    this.mo_gem_par = false;
    this.onEditingProjekt = true;

    this.tempProjekt = JSON.parse(JSON.stringify(this.aktuellesProjekt));// SON.parse(JSON.stringify(...)) -> deep copy
    setTimeout(() => {
      let ai: HTMLElement = document.getElementById(this.aktuellerInput);
    if(ai){
      ai.focus();
    }
  }, 200);
    // this.dialog.open(StandortDialogComponent);
}

 saveChanges() {
    // p.standort.strasse = '';
    if (this.tempProjekt) {
      this.aktuellesProjekt = this.tempProjekt;
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
