import { Component } from '@angular/core';
import { NavigationExtras } from '@angular/router'
import { LoadingController, NavController, Platform } from '@ionic/angular'
import html2canvas from 'html2canvas';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private NavController: NavController,
    private loadingController: LoadingController,
    private platform:Platform) { }


  navegar() {
    let NavigationExtras: NavigationExtras = {
      queryParams: {
        dato: this.user
      }
    };
    this.NavController.navigateForward(['/data1'], NavigationExtras)
  }

  user = "valor"
  segment = 'scanear';
  QrText = 'MaltronFord';

  //capturar el html element , convertirlo a canvas y obtener la imagen
  CaptureScrean() {

    const element = document.getElementById('QrImagen') as HTMLElement;

    html2canvas(element).then((canvas: HTMLCanvasElement) => {
      
      if(this.platform.is('capacitor')) this.CompartirImage(canvas);
      else this.DownLoadImage(canvas);

    })


    // ===== DESCARGAR LA IMAGEN (PC) =====
  }
  DownLoadImage(canvas: HTMLCanvasElement) {

    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = 'qr.png';
    link.click();

  }

  // ===== COMPARTIR LA IMAGEN (MOBILE) ======
  async CompartirImage(canvas: HTMLCanvasElement) {

    let base64 = canvas.toDataURL();
    let path = 'qr.png';


    const loading = await this.loadingController.create({ spinner: 'crescent' });
    await loading.present();


    await Filesystem.writeFile({
      path,
      data: base64,
      directory: Directory.Cache
    }).then(async (res) => {


      let uri = res.uri;


      await Share.share({ url: uri });
      await Filesystem.deleteFile({
        path,
        directory: Directory.Cache
      })
    }).finally(()=>{
      loading.dismiss();
    })





  }
}
