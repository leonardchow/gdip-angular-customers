import { Component, OnInit } from '@angular/core';
import { CustomerService, Customer } from "../services/customerservice";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customer: Customer

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService) { }

  ngOnInit() {
    let customerId = parseInt(this.activatedRoute.snapshot.params['id']);
    
    this.customerService.getCustomer(customerId)
      .then((customer) => {
        this.customer = customer;
      })
      .catch((error) => {
        console.error("Error: ", error);
      })
  }

  goBack() {
    this.router.navigate(['/']);
  }

}
