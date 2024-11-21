import { NgModule } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserService } from '../features/user/services/user.service';


/**
 * Only contains core logics.
 * Interface and type.
 * Technical services such as...
 * - AuthService
 * - BusEvent
 * - StorageService
 */
@NgModule({
  providers: [
    AuthService,
    { provide: UserService, useClass: UserService }
  ]
})
export class CoreModule { }
