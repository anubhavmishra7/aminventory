import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/service/apiservice.service';

@Component({
  selector: 'app-dailysales',
  templateUrl: './dailysales.component.html',
  styleUrls: ['./dailysales.component.scss']
})
export class DailysalesComponent implements OnInit {
 states: any;
  constructor(private router: Router,private api :ApiserviceService) { }

  ngOnInit(): void {
    this.api.getStates().subscribe(res=>{
      this.states = res['states']

    })
  }
  // navigate(){
  //   this.router.navigate(['/am/dashboard'])
  // }
  // employees: any[] =[
    
  //   {
  //     name:'Anubhav',
  //     designation: 'Trainee',
  //     exp: '1',
  //     FTF: 'MM'
  //   },
  //   {
  //     name:'me',
  //     designation: 'associate consultant',
  //     exp: '2',
  //     FTF: 'FI'
  //   },
  //   {
  //     name:'you',
  //     designation: 'consultant',
  //     exp: '3',
  //     FTF: 'HCM'
  //   }
  // ]

}
