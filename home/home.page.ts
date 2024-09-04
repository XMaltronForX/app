import { Component } from '@angular/core';
import { NavigationExtras } from '@angular/router'
import { LoadingController, NavController, Platform } from '@ionic/angular'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private NavController: NavController) { }


  navegar() {
    let NavigationExtras: NavigationExtras = {
      queryParams: {
        dato: this.user
      }
    };
    this.NavController.navigateForward(['/data1'], NavigationExtras)
  }

  user = "valor"
  


  
}
