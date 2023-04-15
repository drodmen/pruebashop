import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Product } from '../interface/product';
import { Shop } from '../models/shop.model';
import { ConfirmComponent } from '../confirm/confirm.component';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Subscription} from 'rxjs'; // permite manejar la suscripción para almacenar el objeto

@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.css']
})


export class StatefulComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(ConfirmComponent, {static: false}) confirmChild: ConfirmComponent;

  errorHttp: boolean = false;
  shopModel: any;
  boughtItems: Array<Product> = [];

  private shopSubscription: Subscription;

  constructor(private http: HttpClient){
    this.boughtItems = [];
    this.confirmChild = {} as ConfirmComponent;
    this.shopSubscription = new Subscription();
    this.shopModel = {shopItems:[]};

    }

  ngOnInit(): void{

  }

  ngAfterViewInit(): void {
    this.confirmChild.isDisabled = true;
  }

  clickItem(_curso:any){
    this.boughtItems.push(_curso);


  }
  cursoMatriculado(_event: Product){
    this.clickItem(_event);
    this.confirmChild.isDisabled = false;
  }

  finalPrice() {
    if (this.boughtItems) {
    return this.boughtItems.reduce(
      (prev: number, item: Product) => prev + (item.price ?? 0), 0
    );
  }else{
    return 0;
  }
 }
 ngOnDestroy(): void {
}


}
