import { NgModule } from '@angular/core';
import { NgExportModule } from '../../ng-export.module';
import { BaseButtonComponent } from './base-button/base-button.component';
import { BaseHeaderComponent } from './base-header/base-header.component';
import { BaseFooterComponent } from './base-footer/base-footer.component';
import { BaseContainerComponent } from './base-container/base-container.component';
import { BaseImageComponent } from './base-image/base-image.component';
/**
 * Expose all the base UI components
 * Such component are `presentational` exclusively
 */
@NgModule({
  declarations: [
    BaseButtonComponent,
    BaseHeaderComponent,
    BaseFooterComponent,
    BaseContainerComponent,
    BaseImageComponent
  ],
  imports: [
    NgExportModule
  ],
  exports: [
    BaseButtonComponent,
    BaseHeaderComponent,
    BaseFooterComponent,
    BaseContainerComponent,
    BaseImageComponent
  ]
})
export class BaseModule { }
