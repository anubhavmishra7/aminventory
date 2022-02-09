import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salesorder',
  templateUrl: './salesorder.component.html',
  styleUrls: ['./salesorder.component.scss']
})
export class SalesorderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  

}
