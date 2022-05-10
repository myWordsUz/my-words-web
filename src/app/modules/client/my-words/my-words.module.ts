import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyWordsRoutingModule } from './my-words-routing.module';
import { MyWordsComponent } from './my-words.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AddEditWordComponent } from './add-edit-word/add-edit-word.component';
import { WordListComponent } from './word-list/word-list.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { AddTranslationTypeComponent } from './add-translation-type/add-translation-type.component';

@NgModule({
  declarations: [
    MyWordsComponent,
    AddEditWordComponent,
    WordListComponent,
    AddTranslationTypeComponent,
  ],
  imports: [
    CommonModule,
    MyWordsRoutingModule,
    NzInputModule,
    NzIconModule,
    NzGridModule,
    NzLayoutModule,
    NzButtonModule,
    NzFormModule,
    NzRadioModule,
    NzModalModule,
  ],
})
export class MyWordsModule {}
