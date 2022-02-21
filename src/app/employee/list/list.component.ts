import {Component, OnInit} from '@angular/core';
import {RequestHandlerService} from "../../_services/request-handler.service";
import {IEmployee} from "../../_interfaces/IEmployee";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  employees: IEmployee [] = [];

  constructor(private requestHandlerService: RequestHandlerService, private router: Router) {
  }


  ngOnInit(): void {
    this.loadAllEmployees();
  }

  loadAllEmployees() {
    this.requestHandlerService.getRequest("emp/").subscribe({
      next: (result: any) => {
        this.employees = result.data;
        console.log(this.employees);
      },
      error: (error) => {
        console.log(error)
      }
    })
  }


}
