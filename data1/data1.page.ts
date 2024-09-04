import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data1',
  templateUrl: './data1.page.html',
  styleUrls: ['./data1.page.scss'],
})
export class Data1Page implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(

      params =>{
        let datolocal = params['dato'];
        console.log(datolocal);
        this.omega
      }

    )

  }


  omega = {dat:"",name1:"pato",names:"pato, ellie y pocoyo" }


  
}

