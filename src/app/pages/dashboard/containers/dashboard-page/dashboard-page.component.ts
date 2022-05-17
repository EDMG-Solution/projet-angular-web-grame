import { Component , OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {ThemePalette} from '@angular/material/core';
import {FormControl} from '@angular/forms';
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
import {CdkAccordionModule} from '@angular/cdk/accordion';

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position:'Mise en place de 100-150 projets d agrégation HVA & élevage', name: 'Service universel de l énergie', weight:' 2-3 Plateformes industrielles intégrées', symbol: ' Dakar médical city'},
  {position: 'Développement de 3 corridors céréaliers', name: 'Dakar médical city', weight:'Hub Logistique Intégré', symbol: ' Hub aérien régional'},
  {position: 'Plan de Relance de l Electricité', name: 'Projets SOGIP', weight:'Projets SOGIP', symbol: ' Service universel de l énergie'},
  
];

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent  {


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

  items = ['Message de la Semaine ', 'Présidence de la République', 'Ministère des Finances et du Budget', 'Ministère du Développement Communautaire, l Equité Sociale et Territoriale', 'Ministère de la Fonction Publique et du Renouveau du Service Public'];
  expandedIndex = 0;

  columns = [
    {
      columnDef: 'position',
      header: 'Agriculture, produits de la mer et agro-alimentaire',
      cell: (element: PeriodicElement) => `${element.position}`,
    },
    {
      columnDef: 'name',
      header: 'Développement de l habitat social et d un écosystème de la construction',
      cell: (element: PeriodicElement) => `${element.name}`,
    },
    {
      columnDef: 'weight',
      header: 'Hub Logistique et industriel Régional',
      cell: (element: PeriodicElement) => `${element.weight}`,
    },
    {
      columnDef: 'symbol',
      header: 'Hub Régional Multiservices et Tourisme ',
      cell: (element: PeriodicElement) => `${element.symbol}`,
    },
  ];
  dataSource = ELEMENT_DATA;
  displayedColumns = this.columns.map(c => c.columnDef);

  constructor(private service: DashboardService) {
    this.dailyLineChartData$ = this.service.loadDailyLineChartData();
    this.performanceChartData$ = this.service.loadPerformanceChartData();
    this.revenueChartData$ = this.service.loadRevenueChartData();
    this.serverChartData$ = this.service.loadServerChartData();
    this.supportRequestData$ = this.service.loadSupportRequestData();
    this.visitsChartData$ = this.service.loadVisitsChartData();
    this.projectsStatsData$ = this.service.loadProjectsStatsData();
  }

  myControl1 = new FormControl();
 
  myControl2 = new FormControl();
  options2: string[] = ['2022', '2021', '2020' , '2019', '2018'];
  myControl3 = new FormControl();
  options3: string[] = ['T1 2021', 'T2 2021', 'T3 2021' , 'T4 2021 ', 'T 5 2021'];
  options1: string[] = ['Projet1', 'Projet 2', 'Projet3' , 'Projet 4', 'Projet 5'];
}
