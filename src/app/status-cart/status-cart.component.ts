import { Component, Input, OnInit, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import {Product} from '../interface/product'

@Component({
  selector: 'app-status-cart',
  templateUrl: './status-cart.component.html',
  styleUrls: ['./status-cart.component.css']
})
export class StatusCartComponent implements OnInit, OnChanges{

  @Input() price: number | undefined;
  @Input() shopModel: Array<Product> | undefined;
  @Input() add: EventEmitter<null> = new EventEmitter();

  constructor(){}
  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes); //cambios en los imputs declarados arriba
  }

  confirm(){
    this.add.emit();
  }

}
