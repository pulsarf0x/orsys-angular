import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewHomeComponent } from './view/view-home/view-home.component';
import { ViewMessageComponent } from './view/view-message/view-message.component';
import { ViewProfileComponent } from './view/view-profile/view-profile.component';

const routes: Routes = [
  {
    path:'',
    title: 'Home',
    component:ViewHomeComponent
  },
  {
    path:'message',
    title: 'Message',
    component:ViewMessageComponent
  },
  {
    path:'profile',
    title: 'Profile',
    component:ViewProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
