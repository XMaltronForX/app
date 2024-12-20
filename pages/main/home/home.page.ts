import { Component, inject, OnInit } from '@angular/core';
import { UtilsService } from '../../../services/utils.service';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  firebaseSvc= inject(FirebaseService);
  utilsSvc=inject(UtilsService);

  ngOnInit() {
  }


  signOut(){
    this.firebaseSvc.signOut();
  }

}
