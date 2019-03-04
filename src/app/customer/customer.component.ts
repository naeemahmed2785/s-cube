import { Component } from '@angular/core';
import { Customer } from '../core/models/customer.model';
import { CustomerService } from '../core/services/customer.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
   customer = new Customer();
  
  constructor(private customerService: CustomerService) { }
  
  save() {
    this.customerService.postCustomer(this.customer)
    .subscribe((response) => {
      console.log('gotcha:', response);
    }, (error) => {
      console.log('Got Error', error);
    })
  }

}
