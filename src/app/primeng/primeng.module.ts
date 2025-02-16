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
    BadgeModule
    
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
    BadgeModule

  ]
})
export class PrimengModule { }
