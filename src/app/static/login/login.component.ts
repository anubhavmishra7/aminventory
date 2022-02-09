import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/service/apiservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;


  constructor( 
    private router: Router
    ) { }

  ngOnInit(){
  }
  logInUser(){
    if(this.email== "am@kaartech.com" && this.password=="123456"){
      this.router.navigate(['/am/dashboard'])
    }
    else{
      console.log("not a user");
    }
  }

}

