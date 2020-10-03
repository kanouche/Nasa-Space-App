import { Component, OnInit } from '@angular/core';
import { ACCEUIL_CARDS } from './themes.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.page.html',
  styleUrls: ['./themes.page.scss'],
})
export class ThemesPage implements OnInit {

  acceuilCards = ACCEUIL_CARDS
  constructor(private router : Router) { }

  ngOnInit() {
  }


  login(){
    this.router.navigateByUrl('/themes');
  }

}
