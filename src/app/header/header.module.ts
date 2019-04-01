import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FaqComponent } from './faq/faq.component'
import { NotificationComponent } from './notification/notification.component'
import { MessageComponent } from './message/message.component'
import { ProfileComponent } from './profile/profile.component'
import { HeaderComponent } from './header.component'

@NgModule({
  declarations: [
    FaqComponent,
    NotificationComponent,
    MessageComponent,
    ProfileComponent,
    HeaderComponent
  ],
  imports: [CommonModule],
  exports: [
    FaqComponent,
    NotificationComponent,
    MessageComponent,
    ProfileComponent,
    HeaderComponent
  ]
})
export class HeaderModule {}
