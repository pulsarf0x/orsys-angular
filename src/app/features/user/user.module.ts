import { NgModule } from '@angular/core';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { UserRegisterFormComponent } from './user-register-form/user-register-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserActionsComponent } from './user-actions/user-actions.component';
import { UserComponent } from './services/user/user.component';


/**
 * Component connected to user management functionnality
 * Such components depend on :
 * - UserService
 */
@NgModule({
  declarations: [
    UserLoginFormComponent,
    UserRegisterFormComponent,
    UserProfileComponent,
    UserActionsComponent,
    UserComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    UserLoginFormComponent,
    UserRegisterFormComponent,
    UserProfileComponent,
    UserActionsComponent
  ]
})
export class UserModule { }
