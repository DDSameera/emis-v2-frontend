import {ISalary} from "../_interfaces/ISalary";

export class Salary implements ISalary {
  salary: string;
  from_date: string;
  to_date: string;

  constructor(salary: string, from_date: string, to_date: string) {
    this.from_date = from_date;
    this.salary = salary;
    this.to_date = to_date;
  }

}
