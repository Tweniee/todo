import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


  export interface register{
    userName: string,
    fullName: string,
    confirmPassword: string,
    password:string
  }

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public allData!: register;
  isFormSubmit: boolean=false;
  isPassword: boolean=false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    let urlParams=this.router?.url?.split("/")[2]
    if(urlParams!=undefined){
      let localStorageCred = localStorage.getItem('registeredUser') as string; //getting data from Localstorage as string
      this.allData=JSON.parse(localStorageCred) // converting the string(object) data to TS understandable object

    }else{
    this.allData = {
      userName: '',
      fullName: '',
      confirmPassword:'',
      password:''
    } //initalising key with blank for DOM
  }
  }
  registerUser(){
    if(this.allData.password==this.allData.confirmPassword){ // checking password missmatch
      let localRegisterData = JSON.stringify(this.allData)
      localStorage.setItem("registeredUser",localRegisterData)
      this.router.navigateByUrl("/login")
    }else{
      this.isPassword=true // this will through error on screen on password missmatch
    }
    
  }
  error(event:object){ //optional function to check the ngForm validations
    this.isFormSubmit=true;
  }
}
