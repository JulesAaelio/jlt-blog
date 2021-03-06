import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import { UrlPipe } from './url.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SidebarComponent,
    UrlPipe
  ],
  exports: [
    SidebarComponent,
    UrlPipe
  ]

})
export class SharedModule {
}
