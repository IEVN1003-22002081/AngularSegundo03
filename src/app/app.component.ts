import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite} from 'flowbite';
/* import { DistanciaComponent } from './formularios/distancia/distancia.component';
import { HoroscopoComponent } from './formularios/horoscopo/horoscopo.component';
import { AxBComponent } from './formularios/ax-b/ax-b.component'; */
import { NavbarComponent } from './navbar/navbar.component';
import { TemhComponent } from './tem/temh/temh.component';
import { TempComponent } from './tem/temp/temp.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,/* DistanciaComponent, HoroscopoComponent,AxBComponent, */ NavbarComponent,TemhComponent,TempComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo03';
  ngOnint(): void{
  initFlowbite();
}
}

