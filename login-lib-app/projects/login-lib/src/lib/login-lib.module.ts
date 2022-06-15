import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginLibComponent } from './login-lib.component';

@NgModule({
  declarations: [LoginLibComponent],
  imports: [CommonModule, FormsModule],
  exports: [LoginLibComponent],
})
export class LoginLibModule {}
