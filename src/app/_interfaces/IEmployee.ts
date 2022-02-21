import {ISalary} from "./ISalary";
import {IDesignation} from "./IDesignation";

export interface IEmployee {

  birth_date: string;
  emp_no: string;
  first_name: string;
  last_name: string;
  gender: string;
  hire_date: string;
  salaries: ISalary;
  designations: IDesignation


}
