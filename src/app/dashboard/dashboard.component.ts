import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayCred: any[] = [];
  constructor(private router: Router) { }

  ngOnInit(): void {
    let localStorageCred = localStorage.getItem('registeredUser') as string; //getting data from Localstorage as string
    this.displayCred.push(JSON.parse(localStorageCred)) // converting the string(object) data to TS understandable object
  }
  userEdit(user: any) {
    this.router.navigateByUrl("/register/" + user.userName)
  }
  userDelete(user: any) {
    this.displayCred.map((items, index) => {
      if (user.userName == items.userName) {
        this.displayCred.splice(index, 1)
      }
    })    
    let localRegisterData = JSON.stringify(this.displayCred)
    localStorage.setItem("registeredUser", localRegisterData)
  }

}
