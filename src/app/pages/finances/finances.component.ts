import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
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
  selector: 'app-finances',
  templateUrl: './finances.component.html',
  styleUrls: ['./finances.component.scss']
})
export class FinancesComponent   {
  
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



  constructor() {
    
    this.dataSource.data = TREE_DATA;
  }



  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  
 


}
