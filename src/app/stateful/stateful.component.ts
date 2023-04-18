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

    ngOnInit(): void {
      this.shopSubscription = this.http.get('assets/cursos.json', {observe: 'response'}).subscribe(
        (respuesta: HttpResponse<any>) => {this.shopModel.shopItems = respuesta.body;},
        (respuesta: HttpResponse<any>) => {this.errorHttp = true;}
      );
  }

    ngOnDestroy(): void{
      // lo invocamos cuando el componente se elimina o se pasa a otro componente (cuando no está en uso)
      // una vez que no está en uso, se llama a shopSubscription esto está observando todo el rato, pero lo que tenemos que hacer es que
      // cuando se salga, haga un unsubcribe, lo que hace que no se haga una pérdida de memoria.
      this.shopSubscription.unsubscribe
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

 onConfirm() {
  alert('Has añadido un nuevo curso')
 }


}
