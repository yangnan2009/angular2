import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BingImageService } from './bing-image.service';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ LoginComponent, RegisterDialogComponent ],
  entryComponents: [RegisterDialogComponent],
  providers: [
    { provide: 'bing', useClass: BingImageService }
  ]
})
export class LoginModule { }
