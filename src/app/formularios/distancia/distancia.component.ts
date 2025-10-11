import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Distancia } from './disntancia';

@Component({
  selector: 'app-distancia',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrls: ['./distancia.component.css']
})
export class DistanciaComponent {
  formulario!: FormGroup;
  resultado!: number;
  objDist = new Distancia(); 

  ngOnInit(): void {
    this.formulario = new FormGroup({
      numero1: new FormControl(''),
      numero2: new FormControl(''),
      numero3: new FormControl(''),
      numero4: new FormControl('')
    });
  }

  calcular(): void {
    this.objDist.x1 = Number(this.formulario.value.numero1);
    this.objDist.y1 = Number(this.formulario.value.numero2);
    this.objDist.x2 = Number(this.formulario.value.numero3);
    this.objDist.y2 = Number(this.formulario.value.numero4);

    this.objDist.calcularDistancia(); 
    this.resultado = this.objDist.resultado; 
  }
}
