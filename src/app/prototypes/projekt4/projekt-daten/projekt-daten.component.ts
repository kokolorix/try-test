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

  constructor() {
    this.useTouch = is_touch_device();
  }

  ngOnInit(): void {
  }

  startChanging(e: any): void {
    this.onEditingProjekt = true;
    this.tempProjekt = this.aktuellesProjekt;
    // this.dialog.open(StandortDialogComponent);
  }

  saveChanges() {
    // p.standort.strasse = '';
    if(this.tempProjekt){
      this.aktuellesProjekt = this.tempProjekt;
      this.tempProjekt = null;
    }
    this.onEditingProjekt = false;
  }
  cancelChanges(){
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