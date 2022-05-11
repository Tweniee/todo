import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string='';
  password: string='';
isSubmit:boolean=false;
  loginCred: any;
  error_message:string=''
  constructor(private router: Router) { }

  ngOnInit(): void {
    let localStorageCred= localStorage.getItem('registeredUser') as string; //getting data from Localstorage as string
    this.loginCred = JSON.parse(localStorageCred) // converting the string(object) data to TS understandable object
  }
  onSubmit(userName:string,password:string){  
    this.isSubmit=true;
    if(userName==this.loginCred['userName']){  //bellow whole block is for validations username and password check validation    
      if(password==this.loginCred['password']){
        this.isSubmit=false;
        localStorage.setItem("isLogin",'true')
        this.router.navigateByUrl("/dashboard/"+userName)
      }else{
        this.error_message="Password InValid!"
      }
    }else{
      this.error_message="Username InValid!"
      if(password!=this.loginCred['password']){
        this.error_message="Username and Password InValid!"
      }
    }

  }

}
