import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    const menuNav = document.querySelector('main nav');
    // @ts-ignore
    menuNav.classList.toggle('open');
  }

  setSelected(btn: any): void {
    const buttons = document.querySelectorAll('main nav button');
    buttons.forEach(b => {
      b.classList.remove('selected');
    });
    btn.classList.add('selected');
  }

  otherLinks(): void {
    const menuNav = document.querySelector('main nav');
    const subMenu =  document.querySelector('.submenu')
    if(window.innerWidth <= 1365) {

      // @ts-ignore
      if(!menuNav.classList.contains('open')) {
        // @ts-ignore
        menuNav.classList.add('open');
      } else {
        // @ts-ignore
        subMenu.classList.toggle('closed');
      }
    } else {
      // @ts-ignore
      subMenu.classList.toggle('closed');
    }
  }

  logOut(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/signin'])
  }
}
