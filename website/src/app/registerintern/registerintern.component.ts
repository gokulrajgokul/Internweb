// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-registerintern',
//   imports: [],
//   templateUrl: './registerintern.component.html',
//   styleUrl: './registerintern.component.css'
// })
// export class RegisterinternComponent {

// }


// togge button

import { Component, AfterViewInit } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-registerintern',
  imports: [],
  templateUrl: './registerintern.component.html',
  styleUrl: './registerintern.component.css'
})
export class RegisterinternComponent implements AfterViewInit {
  ngAfterViewInit() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    navbarToggler?.addEventListener('click', () => {
      const bsCollapse = new bootstrap.Collapse(document.getElementById('navbarNav'), {
        toggle: true
      });
    });
  }
}

