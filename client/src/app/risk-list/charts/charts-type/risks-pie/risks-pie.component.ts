import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-risks-pie',
  templateUrl: './risks-pie.component.html',
  styleUrls: ['./risks-pie.component.css'],
})

export class RisksPieComponent implements OnInit, AfterContentChecked {
  @Input() riskSample;
  isDataAvailable: boolean = false;

  // Pie
  public pieChartLabels: string[] = [
    'Реализация важного модуля в проекте',
    'Задержка в покупке оборудования/ПО',
    'Внутренние сложности календарного планирования',
    'Отсутствие коммуникации между представителем и заказчиком',
    'Недостаток квалифицированных специалистов',
    'Высокая вероятность изменения требований проекта'
  ];
  public pieChartData: number[] = [];
  public pieChartType: string = 'pie';
  public pieChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };

  private firstRisk: number = 0;
  private secondRisk: number = 0;
  private thirdRisk: number = 0;
  private fourthRisk: number = 0;
  private fifthRisk: number = 0;
  private sixthRisk: number = 0;
  private otherRisk: number = 0;

  constructor() {
  }

  ngOnInit() {
    this.riskSample = new Observable(observer => {
      /* I'll do it better when I grow up.*/
      setTimeout(() => {
        observer.complete();
      }, 1000);
    });
    this.riskSample.subscribe(
      value => console.log('value: ' + value),
      error => console.log('Error'),
      () => (console.log('Complited' + this.riskSelect()))
    );
  }

  ngAfterContentChecked() {}

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  private riskSelect() {
    for (let i = 0; i <= this.riskSample.length; i++) {
      if (this.riskSample[i] === 'Реализация важного модуля в проекте') {
        this.firstRisk++;
        continue;
      }
      if (this.riskSample[i] === 'Задержка в покупке оборудования/ПО') {
        this.secondRisk++;
        continue;
      }
      if (this.riskSample[i] === 'Внутренние сложности календарного планирования') {
        this.thirdRisk++;
        continue;
      }
      if (this.riskSample[i] === 'Отсутствие коммуникации между представителем и заказчиком') {
        this.fourthRisk++;
        continue;
      }
      if (this.riskSample[i] === 'Недостаток квалифицированных специалистов') {
        this.fifthRisk++;
        continue;
      }
      if (this.riskSample[i] === 'Высокая вероятность изменения требований проекта') {
        this.sixthRisk++;
        continue;
      } /* else {
        this.otherRisk++;
      } */
    }
    this.pieChartData.push(this.firstRisk,
      this.secondRisk,
      this.thirdRisk,
      this.fourthRisk,
      this.fifthRisk,
      this.sixthRisk,
     /*  this.otherRisk */);
    console.log('this.pieChartData: ' + this.pieChartData);
    this.isDataAvailable = true;
  }
}
