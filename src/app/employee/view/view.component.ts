import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RequestHandlerService} from "../../_services/request-handler.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {


  emp_no: number = 0;
  empSingleRecord: any = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private requestHandlerService: RequestHandlerService) {
  }

  ngOnInit(): void {
    this.emp_no = this.route.snapshot.params['id'];
    this.loadSingleEmploymentData();

  }

  loadSingleEmploymentData() {
    this.requestHandlerService.getRequest('emp/' + this.emp_no).subscribe({
      next: (resultData: any) => {
        console.log(resultData.data);
        this.empSingleRecord = resultData.data;

      },
      error: (errorData: any) => {
        console.log(errorData);
      }
    });
  }

}
