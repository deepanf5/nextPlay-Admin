import { Component } from '@angular/core';
import { PrimengModule } from '../primeng/primeng.module';
import { Table } from 'primeng/table';

interface Users {

    user_id: string,
    first_name: string,
    last_name: string,
    email: string,
    phone_number: string,
    paymentMethod:string,
    address: {
      street: string,
      city: string,
      state: string,
      postal_code:string,
      country: string
    },
    account_status: string,
    registration_date: string
}

@Component({
  selector: 'app-paymentdetails',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './paymentdetails.component.html',
  styleUrl: './paymentdetails.component.scss'
})
export class PaymentdetailsComponent {

   users!:Users[];
      loading: boolean = true;
      searchValue!: string;
    
      ngOnInit(): void {
      
        this.users = [
          {
            user_id: "12345",
            first_name: "John",
            paymentMethod:'cerdit card',
            last_name: "Doe",
            email: "john.doe@example.com",
            phone_number: "+1234567890",
            address: {
              street: "123 Main St",
              city: "Springfield",
              state: "IL",
              postal_code: "62701",
              country: "USA"
            },
            account_status: "active",
            registration_date: "2020-01-01"
          },
          {
            user_id: "67890",
            first_name: "Jane",
            last_name: "Smith",
            email: "jane.smith@example.com",
            phone_number: "+1987654321",
            paymentMethod:'cerdit card',
            address: {
              street: "456 Elm St",
              city: "Shelbyville",
              state: "IN",
              postal_code: "46176",
              country: "USA"
            },
            account_status: "inactive",
            registration_date: "2021-05-14"
          },
          {
            user_id: "23456",
            first_name: "Alice",
            last_name: "Johnson",
            email: "alice.johnson@example.com",
            phone_number: "+1122334455",
            paymentMethod:'cerdit card',
            address: {
              street: "789 Oak St",
              city: "Smalltown",
              state: "TX",
              postal_code: "75001",
              country: "USA"
            },
            account_status: "active",
            registration_date: "2019-11-30"
          },
          {
            user_id: "34567",
            first_name: "Bob",
            last_name: "Williams",
            email: "bob.williams@example.com",
            phone_number: "+1222333444",
            paymentMethod:'cerdit card',
            address: {
              street: "321 Pine St",
              city: "Capitol City",
              state: "CA",
              postal_code: "90001",
              country: "USA"
            },
            account_status: "active",
            registration_date: "2020-07-22"
          },
          {
            user_id: "45678",
            first_name: "Charlie",
            last_name: "Brown",
            email: "charlie.brown@example.com",
            phone_number: "+1444555666",
            paymentMethod:'google',
            address: {
              street: "987 Maple St",
              city: "Midtown",
              state: "FL",
              postal_code: "33101",
              country: "USA"
            },
            account_status: "inactive",
            registration_date: "2021-09-10"
          },
          {
            user_id: "56789",
            first_name: "David",
            last_name: "Davis",
            email: "david.davis@example.com",
            phone_number: "+1555666777",
            paymentMethod:'google',
            address: {
              street: "654 Birch St",
              city: "Eastwood",
              state: "NY",
              postal_code: "10001",
              country: "USA"
            },
            account_status: "active",
            registration_date: "2018-03-15"
          },
          {
            user_id: "67801",
            first_name: "Eva",
            last_name: "Miller",
            email: "eva.miller@example.com",
            phone_number: "+1666777888",
            paymentMethod:'google',
            address: {
              street: "741 Cedar St",
              city: "Westtown",
              state: "NJ",
              postal_code: "07001",
              country: "USA"
            },
            account_status: "active",
            registration_date: "2022-02-28"
          },
          {
            user_id: "78912",
            first_name: "Frank",
            last_name: "Garcia",
            email: "frank.garcia@example.com",
            phone_number: "+1777888999",
            paymentMethod:'google',
            address: {
              street: "852 Redwood St",
              city: "Lakeside",
              state: "MI",
              postal_code: "48801",
              country: "USA"
            },
            account_status: "inactive",
            registration_date: "2017-06-07"
          },
          {
            user_id: "89023",
            first_name: "Grace",
            last_name: "Martinez",
            email: "grace.martinez@example.com",
            phone_number: "+1888999000",
            paymentMethod:'google',
            address: {
              street: "963 Willow St",
              city: "Greenfield",
              state: "OH",
              postal_code: "43123",
              country: "USA"
            },
            account_status: "active",
            registration_date: "2020-12-11"
          },
          {
            user_id: "90134",
            first_name: "Hank",
            last_name: "Rodriguez",
            email: "hank.rodriguez@example.com",
            phone_number: "+1999000111",
            paymentMethod:'cerdit card',
            address: {
              street: "741 Chestnut St",
              city: "Riverdale",
              state: "GA",
              postal_code: "30274",
              country: "USA"
            },
            account_status: "inactive",
            registration_date: "2021-01-25"
          }
        ];

       this.users =  this.users.filter((user) => user.account_status !== 'inactive')
      
      
      }
    
      clear(table: Table) {
        table.clear();
        this.searchValue = ''
    }
   

}
