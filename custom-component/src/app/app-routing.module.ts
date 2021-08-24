import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestElementComponent } from './components/test-element/test-element.component';

const routes: Routes = [
  {
    path: '',
    component: TestElementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
