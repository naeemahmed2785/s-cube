import { Component} from '@angular/core';
import { Customer } from '../core/models/customer.model';
import { CustomerService } from '../core/services/customer.service';
import { UserMessageComponent } from '../user-message/user-message.component'


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
   customer = new Customer();
   customerTitle;
   customerMessage;
  
  constructor(private customerService: CustomerService) { }
  
  save() {
    this.customerService.postCustomer(this.customer)
    .subscribe((response) => {
       this.customerTitle = "Success";
       this.customerMessage = 'Record added successfully.';
    }, (error) => {
      this.customerTitle="Error Occured";
      this.customerMessage = "Error occured while saving customers new record.";
      console.log("Got Error",error, this.customerMessage)
    })
  }

}
