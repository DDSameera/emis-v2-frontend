import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {RequestHandlerService} from "../../_services/request-handler.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{

  @Input() public employee: any = {
    emp_no: "",
    birth_date: "",
    first_name: "",
    last_name: "",
    gender: "",
    hire_date: "",
    salaries: [{
      salary: "",
      from_date: "",
      to_date: "",
    }],
    designations: [{
      title: '',
      from_date: '',
      to_date: '',
    }]


  };

  constructor(private requestHandlerService: RequestHandlerService) {
  }



  ngOnInit(): void {
console.log(this.employee);
  }

  save() {
    this.requestHandlerService.postRequest("emp", this.employee).subscribe({
      next: (resultData) => {
        console.log(resultData);

      },
      error: (errorData) => {
        console.log(errorData);
      }
    })
    console.log(this.employee);
  }

  addSalary() {
    this.employee.salaries.push({
      salary: "",
      from_date: "",
      to_date: "",
    })
  }

  removeSalary(i: number) {
    this.employee.salaries.splice(i);
  }

  addDesignation() {
    this.employee.designations.push({
      title: '',
      from_date: '',
      to_date: '',
    })
  }

  removeDesignation(i: number) {

    this.employee.designations.splice(i);
  }


}
