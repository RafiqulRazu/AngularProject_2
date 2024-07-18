import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocationComponent } from './location/location.component';
import { CreatelocationComponent } from './createlocation/createlocation.component';
import { UpdatelocationComponent } from './updatelocation/updatelocation.component';
import { ViewstudentComponent } from './student/viewstudent/viewstudent.component';

const routes: Routes = [
  {path:'location', component: LocationComponent},
  {path:'createlocation', component: CreatelocationComponent},
  {path:'updateLocation/:id', component: UpdatelocationComponent},
  {path:'student', component: ViewstudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
