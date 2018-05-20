import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NavComponent, FooterComponent, MainComponent],
  exports: [NavComponent, FooterComponent]
})
export class LayoutModule {}
