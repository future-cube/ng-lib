import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SfComponent } from './sf/sf.component';
import { DemoTableColumnsComponent } from './table-columns/table-columns.component';
import { DemoVditorComponent } from './vditor/vditor.component';

const routes: Routes = [
  { path: '', redirectTo: 'table-columns', pathMatch: 'full' },
  { path: 'table-columns', component: DemoTableColumnsComponent },
  { path: 'sf', component: SfComponent },
  { path: 'vditor', component: DemoVditorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule {}
