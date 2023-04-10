import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/product';
import { Shop } from '../models/shop.model';




@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.css']
})


export class StatefulComponent implements OnInit {

  shopModel: Shop = new Shop();
  boughtItems: Array<Product> = [];

  constructor(){
    this.boughtItems = [];
    }

  ngOnInit(): void{

  }


  clickItem(_curso:any){
    this.boughtItems.push(_curso);

  }
  cursoMatriculado(_event: Product){
    this.clickItem(_event);
  }
}
