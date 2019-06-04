import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {AddSaloon} from './app.addsaloon';
import {SearchSaloon} from './app.searchsaloon';
import {FormsModule} from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';

const route:Routes=[
    {path:"add",component:AddSaloon},
    {path:"search",component:SearchSaloon},
    ];
@NgModule({
    imports: [
        BrowserModule,RouterModule.forRoot(route)
        
    ],
    declarations: [
        AppComponent,AddSaloon,SearchSaloon
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }