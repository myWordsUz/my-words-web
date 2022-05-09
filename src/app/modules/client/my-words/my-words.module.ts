import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyWordsRoutingModule } from './my-words-routing.module';
import { MyWordsComponent } from './my-words.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@NgModule({
  declarations: [MyWordsComponent],
  imports: [
    CommonModule,
    MyWordsRoutingModule,
    NzInputModule,
    NzIconModule,
    NzGridModule,
    NzLayoutModule,
  ],
})
export class MyWordsModule {}
