import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SpaceX Launch Program';
  spaceXData: any;
  years: any = [];
  booleanFilter: any = [{
    label: 'True',
    value: true
  },
  {
    label: 'False',
    value: false
  }];
  loader: boolean = false;

  constructor(private appService: AppService) {
    for (let i = 2006; i < 2021; i++) {
      this.years.push(i);
    }
  }

  ngOnInit() {
    this.spaceXgetData();
  }

  spaceXgetData() {
    this.loader = true;
    this.appService.getSpacexData().subscribe((res) => {
      this.spaceXData = res;
      this.loader = false;
    }, (err) => {
      this.loader = false;
      throw err;
    })
  }

  filterData(year, ls, ll) {
    this.loader = true;
    this.appService.getSpacexData(year, ls, ll).subscribe((res) => {
      this.spaceXData = res;
      this.loader = false;
    }, (err) => {
      this.loader = false;
      throw err;
    })
  }
}
