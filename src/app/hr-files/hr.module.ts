import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SearchModule } from '../search/search.module';

import { HrFilesSearchComponent } from './hr-files-search.component';

@NgModule({
  declarations: [HrFilesSearchComponent],
  exports: [HrFilesSearchComponent], // export COMPONENTS, directives, pipes
  imports: [SearchModule, CommonModule] // import MODULES
})
export class HrModule {}
