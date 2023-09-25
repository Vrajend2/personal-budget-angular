import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { DataService } from '../data.service';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  constructor ( public dataService:DataService) {}

  ngOnInit(): void {
        }

}




