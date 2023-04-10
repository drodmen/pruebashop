import { Component, Input} from '@angular/core';
import { Product } from '../interface/product';

@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css']
})
export class StatelessComponent {
  @Input() product: Product = { title: '', desc: '', price: 0, picture: '' };
}