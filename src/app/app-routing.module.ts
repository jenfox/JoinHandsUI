import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { PostListComponent } from './post-list/post-list.component';
const routes: Routes = [
  { path: 'news', component: NewsComponent},
  { path: 'postlist', component: PostListComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
