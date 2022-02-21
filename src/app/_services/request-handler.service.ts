import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RequestHandlerService {


 readonly ip: string = environment.server + ":" + environment.port + "/"+ environment.baseUrl ;

  constructor(private http: HttpClient) {
  }

  getHeaders() {


    let headerContent = {
      'Content-type': 'Application/json'
    };
    return new HttpHeaders(headerContent);


  }

  getRequest(endPoint: string) {
    return this.http.get(this.ip + "/" + endPoint, {headers: this.getHeaders()});
  }

  postRequest(endPoint: string, bodyContent: object) {
    return this.http.post(this.ip + "/" + endPoint, bodyContent, {headers: this.getHeaders()});
  }

  patchRequest(endPoint: string, bodyContent: object) {
    return this.http.patch(this.ip + "/" + endPoint, bodyContent, {headers: this.getHeaders()});
  }

  deleteRequest(endPoint: string) {
    return this.http.delete(this.ip + "/" + endPoint, {headers: this.getHeaders()});
  }


}
