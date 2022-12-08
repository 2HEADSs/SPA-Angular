import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-bikes',
  templateUrl: './create-bikes.component.html',
  styleUrls: ['./create-bikes.component.css']
})
export class CreateBikesComponent implements OnInit {

   URL_PATTERN = '/https?:\/\/./i'


  constructor() { }

  ngOnInit(): void {
  }

}
