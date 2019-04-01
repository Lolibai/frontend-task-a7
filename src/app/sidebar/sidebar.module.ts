import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LogoComponent } from './logo/logo.component'
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component'
import { SidebarComponent } from './sidebar.component'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LogoComponent, SidebarItemComponent, SidebarComponent],
  imports: [CommonModule, RouterModule],
  exports: [LogoComponent, SidebarItemComponent, SidebarComponent]
})
export class SidebarModule {}
