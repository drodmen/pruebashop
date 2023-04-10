import { Component, Input, OnInit} from '@angular/core';
import { Product } from '../interface/product';

@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css']
})
export class StatelessComponent implements OnInit {
  @Input() product: Product;

  public matricula!:string;
  private disable!: boolean;
  constructor(){
    this.product = {       
    title: 'Titulo predeterminado',
    desc: 'Descripción predeterminada',
    price: 0,
    picture: 'ruta/de/imagen' };

  }

  ngOnInit(): void {
    this.matricula = 'Matricularse';
  }

  matricularse(){
    this.disable = true;
    this.matricula = '¡Matriculado!';
  }
  isDisabled(){
    return !!this.disable;
  }
}