import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowAllComponent } from './components/show-all/show-all.component';
import { UpdateComponent } from './components/update/update.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  {path:'todo/finduser/:id' ,component: ShowAllComponent},
  {path:'signin' ,component: SignInComponent},
  {path:'signup' ,component: SignUpComponent},
  {path:'todo' ,component: ShowAllComponent},
  {path:'todo/update/:id' ,component : UpdateComponent},
  // { path: '',   redirectTo: '/todo', pathMatch: 'full'},
  { path: '**', redirectTo: '/todo', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
