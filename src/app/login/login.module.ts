import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth/auth.component';
import { LoginRoutingModule } from './/login-routing.module';

@NgModule({
  imports: [CommonModule, LoginRoutingModule],
  declarations: [AuthComponent],
  exports: [AuthComponent]
})
export class LoginModule {}
