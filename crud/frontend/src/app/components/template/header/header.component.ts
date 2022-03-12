import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private HeaderSerice: HeaderService) { }

  ngOnInit(): void {
  }

  get title(){
    return this.HeaderSerice.headerData.title
  }

  get icon(){
    return this.HeaderSerice.headerData.icon
  }

  get routeUrl(){
    return this.HeaderSerice.headerData.routeUrl
  }

}
