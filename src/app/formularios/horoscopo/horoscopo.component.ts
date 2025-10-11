import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Horoscopo } from './horoscopo';

@Component({
  selector: 'app-horoscopo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent implements OnInit {
  formulario!: FormGroup;
  resultado!: { nombre: string; edad: number; signo: string; imagen: string } | null;
  objHoros = new Horoscopo(); 

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      apellidoP: new FormControl(''),
      apellidoM: new FormControl(''),
      dia: new FormControl(''),
      mes: new FormControl(''),
      ano: new FormControl(''),
      sex: new FormControl('')
    });
  }
  calcular(): void { 
    this.objHoros.nombreO = this.formulario.value.nombre;
    this.objHoros.apellidoPO = this.formulario.value.apellidoP;
    this.objHoros.apellidoMO = this.formulario.value.apellidoM;
    this.objHoros.diaO = Number(this.formulario.value.dia);
    this.objHoros.mesO = Number(this.formulario.value.mes);
    this.objHoros.anoO = Number(this.formulario.value.ano);
    this.objHoros.sexO = Boolean(this.formulario.value.sex);


    this.objHoros.calcularTodo(); 

    this.resultado = this.objHoros.resultado;
  }
}
