import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatDialog } from '@angular/material/dialog';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';






interface FoodNode {
  name: string;
  children?: FoodNode[];
}



const TREE_DATA: FoodNode[] = [
  {
    name: 'ANNEES',
    children: [{name: '2022'}, {name: '2021'}, {name: '2020'}, {name: '2019'}, {name: '2018'}, {name: '2017'}],
  },
  
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


@Component({
  selector: 'app-mediatheque',
  templateUrl: './mediatheque.component.html',
  styleUrls: ['./mediatheque.component.scss']
})
export class MediathequeComponent implements OnInit {



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


  constructor(public dialog: MatDialog) {
    this.dataSource.data = TREE_DATA;
  }


  ngOnInit(): void { 
   
  }
 

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

 

}
