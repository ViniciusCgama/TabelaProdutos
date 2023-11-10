import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './Components/cadastro/CadastroComponent';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './Components/lista/lista.component';
import { HeaderComponent } from './template/header/header.component';
import { CadastroService } from './Components/service/cadastro.component.service';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListaComponent,
    HeaderComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CadastroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
