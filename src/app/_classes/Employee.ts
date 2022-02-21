import {IEmployee} from "../_interfaces/IEmployee";
import {ISalary} from "../_interfaces/ISalary";
import {IDesignation} from "../_interfaces/IDesignation";

export class Employee implements IEmployee {
  public birth_date: string;
  public first_name: string;
  public last_name: string;
  public gender: string;
  public hire_date: string;
  public salaries: ISalary;
  public designations: IDesignation;
  public emp_no: string;

  constructor(
    birth_date: string,
    first_name: string,
    last_name: string,
    gender: string,
    hire_date: string,
    salaries: ISalary,
    designations: IDesignation,
    emp_no: string,
  ) {
    this.birth_date = birth_date;
    this.first_name = first_name;
    this.last_name = last_name;
    this.gender = gender;
    this.hire_date = hire_date;
    this.salaries = salaries;
    this.designations = designations;
    this.emp_no = emp_no;

  }


}
