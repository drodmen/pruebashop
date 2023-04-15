import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  @Input() message: string;
  showModal = false; // Agregamos la propiedad showModal y la inicializamos en false

  isDisabled: boolean;

  constructor(){
    this.isDisabled = true;
    this.message="";
  }
  ngOnInit(): void {
  }

  close(): void {
    this.showModal = false;
  }

  confirm(): void {
    // Lógica del botón confirmar
  }

}
