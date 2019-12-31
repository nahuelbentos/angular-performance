import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject  } from '@angular/core';

import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  mySwiper: Swiper;

  // tslint:disable-next-line: ban-types
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Client only code.
    this.mySwiper = new Swiper('.swiper-container');
   }
  }

}
