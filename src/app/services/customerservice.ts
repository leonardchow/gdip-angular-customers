import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

export interface Customer {
  customerId: number;
  name: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  discountCode?: string;
  address1?: string;
  address2?: string;
  phone?: string;
  creditLimit?: string;
  rate?: number;
  fax?: string;
}

const hostUrl: string = "http://localhost:8080/SakilaApp/";

@Injectable()
export class CustomerService {

  constructor(private http: Http) {}

  getCustomers(): Promise<Customer[]> {
    return new Promise((resolve, reject) =>
    this.http.get(`${hostUrl}customers`)
      .subscribe(
        (result) => {
          const customers = result.json().customers;
          resolve(customers);
        },
        (error) => {
          reject(error);
        })
      )
  }

  getCustomer(id: number): Promise<Customer> {
    return new Promise((resolve, reject) => {
      this.http.get(`${hostUrl}customer/${id}`)
        .subscribe(
          (result) => {
            const customer = result.json();
            customer.creditLimit = "$" + customer.creditLimit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
            resolve(customer);
          },
          (error) => {
            reject(error);
          }
        )
    })
  }

}

function toTitleCase(str: string) {
  const words = str.split(' ');
  return words.map(word => {
    if (word.length > 0) {
      return word[0].toUpperCase() + word.substring(1).toLowerCase();
    }
    return word;
  })
  .join(' ');
}