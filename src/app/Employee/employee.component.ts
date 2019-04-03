import { Component } from '@angular/core';

@Component({
    templateUrl:'./employee.component.html',
    selector:'emp-details',
    styleUrls:[]
})

export class EmployeeComponent{
    firstName :string = 'Chinmay';
    lastName :string = 'Waghumbare';
}