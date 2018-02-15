import { Component, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-admin-panel',
  template: '<svg width="200" height="200"></svg>',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  barChartData: any[];
  ngOnInit() {}
  constructor(private service: DataService) {
    this.barChartData = this.service.getBarData();
  }


}
