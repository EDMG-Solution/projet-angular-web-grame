import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ChartsService } from '../../services';
import {
  DashedLineChartData,
  HeatmapChartData,
  LineChartData,
  PieChartData
} from '../../models';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';



/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
 interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: ' Projets phares',
    children: [{name: 'Projet 1'}, {name: 'Projet 2'}, {name: 'Projet 3'}],
  },
  {
    name: 'Réformes phares',
    children: [{name: 'Projet 1'}, {name: 'Projet 2'}, {name: 'Projet 3'}],
  },
  ,
];
/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}



@Component({
  selector: 'app-charts-page',
  templateUrl: './charts-page.component.html',
  styleUrls: ['./charts-page.component.scss']
})
export class ChartsPageComponent {
  public lineChartData$: Observable<LineChartData>
  public dashedLineChartData$: Observable<DashedLineChartData>
  public pieChartData$: Observable<PieChartData>
  public heatmapChartData$: Observable<HeatmapChartData>



  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


  constructor(private service: ChartsService) {
    this.lineChartData$ = this.service.loadLineChartData();
    this.dashedLineChartData$ = this.service.dashedLineChartData();
    this.pieChartData$ = this.service.loadPieChartData();
    this.heatmapChartData$ = this.service.loadHeatmapChartData();
    this.dataSource.data = TREE_DATA;
  }



  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  
 



}
