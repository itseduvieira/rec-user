import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { CardLayoutComponent } from './layouts/card-layout/card-layout.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  }, {
    path: '',
    component: CardLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/card-layout/card-layout.module#CardLayoutModule'
      }
    ]
  }, {
    path: '**',
    redirectTo: 'welcome'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
