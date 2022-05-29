import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';


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
  selector: 'app-tdb-financier',
  templateUrl: './tdb-financier.component.html',
  styleUrls: ['./tdb-financier.component.css']
})
export class TdbFinancierComponent {



  displayedColumns: string[] = [];
  dataSource = ELEMENT_DATA;

  tables = [0];

  constructor() {
    this.displayedColumns.length = 24;
    this.displayedColumns.fill('filler');

    // The first two columns should be position and name; the last two columns: weight, symbol
    this.displayedColumns[0] = 'position';
    this.displayedColumns[1] = 'name';
    this.displayedColumns[22] = 'weight';
    this.displayedColumns[23] = 'symbol';

  //  this.dataSource.data = TREE_DATA;
  }

  /** Whether the button toggle group contains the id as an active value. */
  isSticky(buttonToggleGroup: MatButtonToggleGroup, id: string) {
    return (buttonToggleGroup.value || []).indexOf(id) !== -1;
  }




  
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

 // dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);



 



  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  
 


}



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Projet1', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Projet2', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Projet3', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Projet4', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Projet5', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Projet6', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Projet7', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Projet8', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Projet9', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Projet10', weight: 20.1797, symbol: 'Ne'},
];
