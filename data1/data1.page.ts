import { Component,OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router'
import { LoadingController, NavController, Platform } from '@ionic/angular'
import html2canvas from 'html2canvas';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';
import { AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-data1',
  templateUrl: './data1.page.html',
  styleUrls: ['./data1.page.scss'],
})
export class Data1Page implements OnInit {

  constructor(
    private NavController: NavController,
    private loadingController: LoadingController,
    private platform:Platform,
    private animationCtrl: AnimationController) { }

  ngOnInit() {
  }

  text1='';
  text2='';
  text3='';
  
  showRunningPeople = false;
  animation: any;

  generateQR() {
    this.QrText = `${this.text1} ${this.text2} ${this.text3}`;
  }



  segment = 'scanear';
  QrText = 'GENERA TU QR AQUI';

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

