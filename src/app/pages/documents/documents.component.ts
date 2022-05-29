import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';





export interface PeriodicElement {
  name: string;
  position: number;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen'},
  {position: 2, name: 'Helium'},
  {position: 3, name: 'Lithium'},
  {position: 4, name: 'Beryllium'},
  {position: 5, name: 'Boron', },
  {position: 6, name: 'Carbon' },
  {position: 7, name: 'Nitrogen'},
  {position: 8, name: 'Oxygen'},
  {position: 9, name: 'Fluorine'},
  {position: 10, name: 'Neon'},
  {position: 11, name: 'Sodium'},
  {position: 12, name: 'Magnesium'},
  {position: 13, name: 'Aluminum'},
  {position: 14, name: 'Silicon'},
  {position: 15, name: 'Phosphorus'},
  {position: 16, name: 'Sulfur'},
  {position: 17, name: 'Chlorine'},
  {position: 18, name: 'Argon'},
  {position: 19, name: 'Potassium'},
  {position: 20, name: 'Calcium'},
];


@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
