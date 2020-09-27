import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';
import { FormulaireCompteComponent } from './formulaire-compte/formulaire-compte.component';
import { RecapitulatifCompteComponent } from './recapitulatif-compte/recapitulatif-compte.component';
import { PasswordPatternDirective } from './directives/password-pattern.directive';
import { MatchPasswordDirective } from './directives/match-password.directive';
import { ValidateNameDirective } from './directives/validate-name.directive';
import { ValidateUsernameDirective } from './directives/validate-username.directive';
import { PhoneNumberPipe } from './pipes/phone-number.pipe';
import { ValidatePhoneNumberDirective } from './directives/validate-phone-number.directive';

@NgModule({
  declarations: [
    AppComponent,
    TetiereComponent,
    FooterComponent,
    FormulaireCompteComponent,
    RecapitulatifCompteComponent,
    PasswordPatternDirective,
    MatchPasswordDirective,
    ValidateNameDirective,
    ValidateUsernameDirective,
    PhoneNumberPipe,
    ValidatePhoneNumberDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
