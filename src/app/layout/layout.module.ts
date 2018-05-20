import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NavComponent, FooterComponent],
  exports: [NavComponent, FooterComponent]
})
export class LayoutModule {}
