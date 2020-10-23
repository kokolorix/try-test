import { Component, OnInit, Input } from '@angular/core';
import { Anlage, Projekt } from 'src/app/shared/projekt.interface';

@Component({
  selector: 'projekt-anlage-daten',
  templateUrl: './anlage-daten.component.html',
  styleUrls: ['./anlage-daten.component.scss']
})
export class AnlageDatenComponent implements OnInit {
  @Input() aktuellesProjekt:Projekt;

  public onEditingAnlage: boolean = false;
  public aktuelleAnlage: Anlage;

  public displayedColumns: string[] = ['edit', 'anlage', 'zaehler', 'vnbnr', 'tag', 'ia', 'ab', 'sina'];

  constructor() { }

  ngOnInit(): void {
  }

  hasLeistung(a:Anlage, typ:string):boolean{
    return a.leistungen.filter(x => x.typ.toLocaleLowerCase() === typ.toLocaleLowerCase()).length !== 0;
  }
  openAnlageDetail(a:Anlage):void{

  }

  startChanging(e: any): void {
  }

  saveChanges() {
  }

  cancelChanges(){
  }

}
