import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blue-project-switch',
  templateUrl: './blue-project-switch.component.html',
  styleUrls: ['./blue-project-switch.component.css']
})
export class ProjectSwitchComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
