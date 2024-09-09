import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  userType: string = 'alumno'; // Rol por defecto
  email: string = '';
  password: string = '';

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController // Controlador para el cargador
  ) { }

  // Función para cambiar entre segmentos con una animación de carga
  async changeSegment(type: string) {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      spinner: 'crescent',
      duration: 1000 // Tiempo que dura la animación de carga
    });
    await loading.present();

    // Cambia de segmento (alumno/profesor) tras finalizar la animación de carga
    setTimeout(() => {
      this.userType = type;
      loading.dismiss();
    }, 1000); // Espera el mismo tiempo que la duración del cargador
  }

  // Función para iniciar sesión con animación de carga
  async iniciarSesion() {
    if (this.email === '' || this.password === '') {
      this.mostrarAlerta('Error', 'Por favor, completa todos los campos.');
    } else {
      const loading = await this.loadingCtrl.create({
        message: 'Iniciando sesión...',
        spinner: 'bubbles',
        duration: 2000 // Duración de la animación de carga
      });
      await loading.present();

      // Simula una petición de inicio de sesión
      setTimeout(() => {
        loading.dismiss();
        this.navegar();
      }, 2000); // Mismo tiempo que la duración del cargador
    }
  }

  // Método genérico para mostrar alertas
  async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }

  // Método para navegar a 'data1'
  navegar() {
    this.navCtrl.navigateForward('/data1');  // Redirige siempre a la página 'data1'
  }
}
