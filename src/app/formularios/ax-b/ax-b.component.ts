import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Multiplicacion } from './multiplicacion';


@Component({
  selector: 'app-ax-b',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ax-b.component.html',
  styleUrl: './ax-b.component.css'
})
export class AxBComponent {
   formulario!: FormGroup;
  resultado!: number;
    objMult = new Multiplicacion(); 


  ngOnInit(): void {
    this.formulario = new FormGroup({
      numero1: new FormControl(''),
      numero2: new FormControl('')
    });
}
 multNumeros(): void {
  this.objMult.numero1 = this.formulario.value.numero1;
  this.objMult.numero2 = this.formulario.value.numero2;
  this.objMult.multNumeros();
  this.resultado = this.objMult.resultado;
}
}
