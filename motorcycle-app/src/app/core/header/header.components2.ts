// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from 'src/app/auth/auth.service';
// import { IUser } from 'src/app/shared/interfaces/user';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent implements OnInit {

//   currentUser!: string
//   currentUserName: IUser | null = null

//   constructor(private authService: AuthService, private router: Router) {
//   }

//   ngOnInit(): void {

//     this.authService.refreshInfo.subscribe((response) => {
//       console.log(response);
//       this.currentUser = response.username
//     });


//   }


//   get isLoggedIn() {
//     this.authService.getUser()
//     return this.authService.isLoggedIn();
//   }


//   logout() {
//     this.authService.logout()
//     this.router.navigate(['/'])
//   }


// }
