import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MinesweeperComponent } from './minesweeper/minesweeper.component';
import { SnakeComponent } from './snake/snake.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'minesweeper', component: MinesweeperComponent},
  {path: 'snake', component: SnakeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
