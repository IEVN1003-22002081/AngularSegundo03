import {Routes} from '@angular/router';
export default[
    {
        path:'distancia',
        loadComponent:()=>import('./distancia/distancia.component').then(c=>c.DistanciaComponent)  
    },
    {
          path:'horoscopo',
        loadComponent:()=>import('./horoscopo/horoscopo.component').then(c=>c.HoroscopoComponent) 
    }
    ,
    {
          path:'ax-b',
        loadComponent:()=>import('./ax-b/ax-b.component').then(c=>c.AxBComponent) 
    }

]as Routes