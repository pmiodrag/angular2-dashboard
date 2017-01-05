import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders} from '@angular/core';
import { AuthComponent } from './auth.component';
import { AuthService } from './auth.service';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { MaterialModule } from '@angular/material';
import { SharedModule } from '../../shared/shared.module';
@NgModule({
    declarations: [
        AuthComponent
    ],
    exports: [
        AuthComponent
    ],
    providers: [
      AuthService, AUTH_PROVIDERS
    ],
    imports: [SharedModule.forRoot(), MaterialModule.forRoot()],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule {
    static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
       AuthService
      ]
    };
  }
}

