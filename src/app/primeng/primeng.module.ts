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
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ImageModule } from 'primeng/image';
import { InputNumberModule } from 'primeng/inputnumber';
import { DynamicDialogModule } from 'primeng/dynamicdialog';






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
    ChartModule,
    TagModule,
    RatingModule,
    InputIconModule,
    IconFieldModule,
    FloatLabelModule,
    DropdownModule,
    CalendarModule,
    InputTextareaModule,
    InputNumberModule,
    DynamicDialogModule
    
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
    ChartModule,
    TagModule,
    RatingModule,
    InputIconModule,
    IconFieldModule,
    FloatLabelModule,
    DropdownModule,
    CalendarModule,
    InputTextareaModule,
    ImageModule,
    InputNumberModule,
    DynamicDialogModule

  ]
})
export class PrimengModule { }
