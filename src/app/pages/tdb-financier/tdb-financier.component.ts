import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatTreeFlattener } from '@angular/material/tree';


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
    this.displayedColumns.length = 5;
    this.displayedColumns.fill('filler');

    // The first two columns should be position and name; the last two columns: weight, symbol
    this.displayedColumns[0] = 'projet';
    this.displayedColumns[1] = 'composante';
    this.displayedColumns[2] = 'indicatif';
    this.displayedColumns[3] = 'global';
    this.displayedColumns[4] = 'type';

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
  composante: string;
  projet: number;
  indicatif: number;
  global: string;
  type: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {projet: 1, composante: 'Projet1', indicatif: 1.0079, global: 'H',type:'Public'},
  {projet: 2, composante: 'Projet2', indicatif: 4.0026, global: 'He',type:'Public'},
  {projet: 3, composante: 'Projet3', indicatif: 6.941, global: 'Li',type:'Public'},
  {projet: 4, composante: 'Projet4', indicatif: 9.0122, global: 'Be',type:'Public'},
  {projet: 5, composante: 'Projet5', indicatif: 10.811, global: 'B',type:'Public'},
  {projet: 6, composante: 'Projet6', indicatif: 12.0107, global: 'C',type:'Public'},
  {projet: 7, composante: 'Projet7', indicatif: 14.0067, global: 'N',type:'Public'},
  {projet: 8, composante: 'Projet8', indicatif: 15.9994, global: 'O',type:'Public'},
  {projet: 9, composante: 'Projet9', indicatif: 18.9984, global: 'F',type:'Public'},
  {projet: 10, composante: 'Projet10', indicatif: 20.1797, global: 'Ne',type:'Public'},
];
