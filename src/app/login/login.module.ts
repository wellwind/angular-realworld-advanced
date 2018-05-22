import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './/login-routing.module';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports: [CommonModule, LoginRoutingModule, FormsModule],
  declarations: [AuthComponent],
  exports: [AuthComponent]
})
export class LoginModule {}
