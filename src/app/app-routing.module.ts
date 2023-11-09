import { CadastroComponent } from './Components/cadastro/CadastroComponent';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './Components/lista/lista.component';

const routes: Routes = [
  {path:'', component:CadastroComponent}, 
  {path:'produtos', component:ListaComponent},
  {path:'produtos/cadastrar', component:CadastroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
