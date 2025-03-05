import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { SidebarModule } from 'primeng/sidebar';
import { TreeModule } from 'primeng/tree';
import { BadgeModule } from 'primeng/badge';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ChartModule } from 'primeng/chart';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    MessagesModule,
    AvatarModule,
    AvatarGroupModule,
    SidebarModule,
    TreeModule,
    BadgeModule,
    CardModule,
    PanelModule,
    TableModule,
    PaginatorModule,
    ChartModule
    
  ],
  exports:[
    InputTextModule,
    ButtonModule,
    ToastModule,
    MessagesModule,
    AvatarModule,
    AvatarGroupModule,
    SidebarModule,
    TreeModule,
    BadgeModule,
    CardModule,
    PanelModule,
    TableModule,
    PaginatorModule,
    ChartModule

  ]
})
export class PrimengModule { }
