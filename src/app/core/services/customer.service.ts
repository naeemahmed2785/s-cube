import { Injectable } from "@angular/core";
import { Customer } from "../models/customer.model";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx"
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService {

    constructor(private http: Http) { }
    postCustomer(customerObect){
        console.log(customerObect);
        let headers = new Headers ({'Content-Type' : 'application/json'});
        let options = new RequestOptions({ headers: headers });
        // this will return an observable
        return this.http.post('http://localhost:63135/api/customer', {customerObect}, options);
    }
}
