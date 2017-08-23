import { Component, OnInit } from '@angular/core';
import { CustomerService, Customer } from "../services/customerservice";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomers()
      .then((customers) => {
        this.customers = customers;
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }

}
