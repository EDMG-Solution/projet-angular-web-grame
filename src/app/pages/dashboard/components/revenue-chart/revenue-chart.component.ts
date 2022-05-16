import { Component, Input, OnInit } from '@angular/core';

import { RevenueChartData } from '../../models';
import {colors} from '../../../../consts';

@Component({
  selector: 'app-revenue-chart',
  templateUrl: './revenue-chart.component.html',
  styleUrls: ['./revenue-chart.component.scss']
})
export class RevenueChartComponent implements OnInit {
  @Input() revenueCharData: RevenueChartData;
  public revenueChart: any;
  public colors: typeof colors = colors;

  public ngOnInit(): void {
    this.initChart();
  }

  public initChart(): void {
    this.revenueChart = {
      color: [colors.GREEN, colors.PINK, colors.YELLOW, colors.BLUE ,colors.ORENGE],
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: 'center',
        right: 'right',
        data: ['Non lancé', 'Structuration', 'Exploitation', 'Bloqué', 'Exécution'],
        textStyle: {
          color: '#6E6E6E'
        }
      },
      series: [{
        type: 'pie',
        radius: ['50%', '70%'],
        center: ['24%', '50%'],
        label: {
          show: false
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        hoverAnimation: false,
        avoidLabelOverlap: false,
        data: [
          {
            name: 'Non lancé',
            value: this.revenueCharData.groupA
          },
          {
            name: 'Structuration',
            value: this.revenueCharData.groupB
          },
          {
            name: 'Exploitation',
            value: this.revenueCharData.groupC
          },
          {
            name: 'Bloqué',
            value: this.revenueCharData.groupD
          },
          {
            name: 'Exécution',
            value: this.revenueCharData.groupD
          },
        ]
      }]
    };
  }
}
