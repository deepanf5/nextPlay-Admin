import { Component, OnInit } from '@angular/core';
import { PrimengModule } from '../primeng/primeng.module';
import { Table } from 'primeng/table';

interface Users {

    user_id: string,
    member_ship:string,
    first_name: string,
    last_name: string,
    email: string,
    phone_number: string,
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
  selector: 'app-users',
  standalone: true,
  imports: [PrimengModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{

  users!:Users[];
    loading: boolean = true;
    searchValue!: string;
  
    ngOnInit(): void {
    
      this.users = [
        {
          user_id: "12345",
        member_ship:'Prime',
          first_name: "John",
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
        member_ship:'Elite',
          first_name: "Jane",
          last_name: "Smith",
          email: "jane.smith@example.com",
          phone_number: "+1987654321",
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
        member_ship:'Elite',
          first_name: "Alice",
          last_name: "Johnson",
          email: "alice.johnson@example.com",
          phone_number: "+1122334455",
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
        member_ship:'Elite',
          first_name: "Bob",
          last_name: "Williams",
          email: "bob.williams@example.com",
          phone_number: "+1222333444",
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
        member_ship:'Elite',
          first_name: "Charlie",
          last_name: "Brown",
          email: "charlie.brown@example.com",
          phone_number: "+1444555666",
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
        member_ship:'Elite',
          first_name: "David",
          last_name: "Davis",
          email: "david.davis@example.com",
          phone_number: "+1555666777",
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
        member_ship:'Prime',
          first_name: "Eva",
          last_name: "Miller",
          email: "eva.miller@example.com",
          phone_number: "+1666777888",
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
        member_ship:'Elite',
          first_name: "Frank",
          last_name: "Garcia",
          email: "frank.garcia@example.com",
          phone_number: "+1777888999",
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
        member_ship:'Basic',
          first_name: "Grace",
          last_name: "Martinez",
          email: "grace.martinez@example.com",
          phone_number: "+1888999000",
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
        member_ship:'Basic',
          first_name: "Hank",
          last_name: "Rodriguez",
          email: "hank.rodriguez@example.com",
          phone_number: "+1999000111",
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
    
    
    }
  
    clear(table: Table) {
      table.clear();
      this.searchValue = ''
  }
  
  
    
  

}
