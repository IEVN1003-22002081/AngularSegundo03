export class Horoscopo {
  anoO: number = 0;
  diaO: number = 0;
  mesO: number = 0;
  nombreO: string = '';
  apellidoPO: string = '';
  apellidoMO: string = '';
  sexO: boolean = false;
  imagen: string = '';

  resultado: { nombre: string; edad: number; signo: string; imagen: string } | null = null;

  calcularTodo(): void {
    let resultadoSigno = this.calcularSignoYImagen();
    let signo = resultadoSigno.signo;
    let imagen = resultadoSigno.imagen;
    let edad = this.calcularEdad();
    let nombreCompleto = (this.nombreO + ' ' + this.apellidoPO + ' ' + this.apellidoMO).trim();

    this.resultado = {
      nombre: nombreCompleto,
      edad: edad,
      signo: signo,
      imagen: imagen
    };
  }

  public calcularSignoYImagen(): { signo: string; imagen: string } {
    let r1 = this.anoO - 1900;
    let r2 = r1 % 12;
    switch (r2) {
      case 0:
        return { signo: "Rata", imagen: "https://content.instyle.es/medio/2023/10/24/horoscopo-chino_948d05a3_231024161827_1500x1500.jpg" };
      case 1:
        return { signo: "Buey", imagen: "https://content.instyle.es/medio/2023/10/24/horoscopo-chino_ce72c593_231024161901_1200x1200.jpg" };
      case 2:
        return { signo: "Tigre", imagen: "https://content.instyle.es/medio/2023/10/24/horoscopo-chino-tigre_7b68718e_231024134726_1500x1500.jpg" };
      case 3:
        return { signo: "Conejo", imagen: "https://content.instyle.es/medio/2023/10/24/horoscopo-chino_ce6c9713_231024134756_1500x1500.jpg" };
      case 4:
        return { signo: "Dragón", imagen: "https://content.instyle.es/medio/2023/10/24/horoscopo-chino_882d1442_231024134933_1500x1500.jpg" };
      case 5:
        return { signo: "Serpiente", imagen: "https://content.instyle.es/medio/2023/10/24/horoscopo-chino-2024-serpiente_e4423876_231024161951_1500x1500.jpg" };
      case 6:
        return { signo: "Caballo", imagen: "https://content.instyle.es/medio/2023/10/24/horoscopo-chino_c36b0c82_231024162028_1500x1500.jpg" };
      case 7:
        return { signo: "Cabra", imagen: "https://content.instyle.es/medio/2023/10/24/horoscopo-chino-2024-cabra_76e51b47_231024162106_1500x1500.jpg" };
      case 8:
        return { signo: "Mono", imagen: "https://content.instyle.es/medio/2023/10/24/horoscopo-chino_12324bfd_231024162144_1500x1500.jpg" };
      case 9:
        return { signo: "Gallo", imagen: "https://content.instyle.es/medio/2023/10/24/horoscopo-chino_317a26df_231024170711_1500x1500.jpg" };
      case 10:
        return { signo: "Perro", imagen: "https://content.instyle.es/medio/2023/10/24/horoscopo-chino_bb3d8fea_231024170736_1500x1500.jpg" };
      case 11:
        return { signo: "Cerdo", imagen: "https://content.instyle.es/medio/2023/10/24/horoscopo-chino_098f2b67_231024170802_1500x1500.jpg" };
      default:
        return { signo: "Año no válido", imagen: "" };
    }
  }
    //para el commit del horoscopo
  public calcularEdad(): number {
    let fechaNacimiento = new Date(this.anoO, this.mesO - 1, this.diaO);
    let hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();

    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
      edad--;
    }
    return edad;
  }
}
