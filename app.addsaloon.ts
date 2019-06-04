import {Component, OnInit} from '@angular/core';
import { Saloon } from './app.saloon';
import {SaloonService} from './app.saloonservice';
@Component({
    selector:'add-sal',
    templateUrl:'addsaloon.html'
})
export class AddSaloon implements OnInit{

    saloons:Saloon[];
    model:any={};
   // pro:any={id:1008,"name":"ABC","price":144.11,"description":"Good",inventory:{"id":109,
    //"name":"Good"}}
    constructor(private salservice:SaloonService){}
    ngOnInit(){
     // this.salservice.getAllsaloon().subscribe((data:Saloon[])=>this.saloons=data);
    }
    addSaloon(){
        //console.log(this.model);
       
        this.salservice.addsaloon(this.model).subscribe((data:any)=>console.log(data));
    }
}