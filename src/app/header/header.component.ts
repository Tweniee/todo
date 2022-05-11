import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isnav:boolean=true;
  loginName: string='';
  headerCred: any;
  isLogin:boolean=false;
  constructor(public router: Router) {}

  ngOnInit(): void {}
  userName(){
    let name = this.router.url.split("/")[2];
    return name;
  }
  isLogout(){
    let loginValidate = localStorage.getItem("isLogin")
    this.isLogin = loginValidate=="true" 
    return this.isLogin;
  }
  redirect(){
    this.isnav=!this.isnav
  }
  logout(){
    localStorage.setItem("isLogin","false")
  }

}
