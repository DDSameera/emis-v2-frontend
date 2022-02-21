import {IDesignation} from "../_interfaces/IDesignation";

export class Designations implements IDesignation {
  title: string;
  from_date: string;
  to_date: string;

  constructor(title: string, from_date: string, to_date: string) {
    this.title = title;
    this.from_date = from_date;
    this.to_date = to_date;

  }


}
