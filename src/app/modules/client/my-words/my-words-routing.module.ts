import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyWordsComponent } from './my-words.component';

const routes: Routes = [{ path: '', component: MyWordsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyWordsRoutingModule { }
