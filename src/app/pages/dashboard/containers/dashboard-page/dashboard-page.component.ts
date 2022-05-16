import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {ThemePalette} from '@angular/material/core';
import { DashboardService } from '../../services';
import {
  DailyLineChartData,
  PerformanceChartData,
  ProjectStatData,
  RevenueChartData,
  ServerChartData,
  SupportRequestData,
  VisitsChartData
} from '../../models';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent {
  public dailyLineChartData$: Observable<DailyLineChartData>;
  public performanceChartData$: Observable<PerformanceChartData>;
  public revenueChartData$: Observable<RevenueChartData>;
  public serverChartData$: Observable<ServerChartData>;
  public supportRequestData$: Observable<SupportRequestData[]>;
  public visitsChartData$: Observable<VisitsChartData>;
  public projectsStatsData$: Observable<ProjectStatData>;
  availableColors: ChipColor[] = [
   
    {name: '71 | Satisfaisant', color: 'primary'},
    {name: '48 | Alerte', color: 'accent'},
    {name: '16 | Blocage', color: 'warn'},
  ];

  constructor(private service: DashboardService) {
    this.dailyLineChartData$ = this.service.loadDailyLineChartData();
    this.performanceChartData$ = this.service.loadPerformanceChartData();
    this.revenueChartData$ = this.service.loadRevenueChartData();
    this.serverChartData$ = this.service.loadServerChartData();
    this.supportRequestData$ = this.service.loadSupportRequestData();
    this.visitsChartData$ = this.service.loadVisitsChartData();
    this.projectsStatsData$ = this.service.loadProjectsStatsData();
  }
}
