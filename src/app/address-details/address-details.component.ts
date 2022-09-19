import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.css']
})
export class AddressDetailsComponent implements OnInit {

  isExpanded=false;
  constructor() { }

  ngOnInit(): void {
  }

}
