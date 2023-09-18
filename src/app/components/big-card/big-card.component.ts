import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string=''
  @Input()
  dayleData:string='25 de janeiro de 2024'
  @Input()
  cardTitle:string=''
  @Input()
  cardDescription:string=''
  constructor(){}

  ngOnInit(): void {
  }

}
