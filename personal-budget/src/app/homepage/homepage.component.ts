import { Component,AfterViewInit } from '@angular/core';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import Chart from 'chart.js/auto';
import { BreadcrumbsComponent} from '../breadcrumbs/breadcrumbs.component';
import { DataService } from '../data.service';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {


  public  dataSource ={
    datasets: [
     {
        data:[25,150,75,35,45,25,25,75,25],
        backgroundColor: [
        '#ffcd56','#ff6384','#36a2eb','#fd6b19', '#f38b4a', '#56d798', '#ff8397','#6970d5','#eb3639'
        ],
     }
   ],
   labels: [
      'Eat out',
      'Rent',
      'Grocery',
      'Medical and Healthcare',
      'Transportation',
      'Utilities',
      'Insurance',
      'Childcare',
      'Clothing',

   ]
};

 constructor(private http:HttpClient) {}

 ngAfterViewInit(): void {
   this.http.get('http://localhost:3000/budget')
   .subscribe((res: any) => {

    for (var i=0; i < res.myBudget.length; i++)
                 {
                  this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
                  this.dataSource.labels[i] = res.myBudget[i].title;
                  this.createChart();
   }
   });
}

createChart() {
  var ctx = <HTMLCanvasElement>document.getElementById('myPieChart');
  var myPieChart = new Chart(ctx, {
    type :'pie',
    data:this.dataSource
  });

   var ctx = <HTMLCanvasElement>document.getElementById('doughnutChart');
   var myDoughnutChart = new Chart(ctx, {
      type :'doughnut',
      data:this.dataSource
    });

    }
}
