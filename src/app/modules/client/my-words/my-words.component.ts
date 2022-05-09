import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mw-my-words',
  templateUrl: './my-words.component.html',
  styleUrls: ['./my-words.component.less'],
})
export class MyWordsComponent implements OnInit {
  translationsGrouped = [
    {
      when: 'Bugun',
      translations: [
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: true,
        },
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: true,
        },
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: true,
        },
      ],
    },
    {
      when: 'Kecha',
      translations: [
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: true,
        },
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: false,
        },
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: false,
        },
      ],
    },
    {
      when: '07.05.2022',
      translations: [
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: true,
        },
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: false,
        },
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: false,
        },
      ],
    },
    {
      when: '07.05.2022',
      translations: [
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: true,
        },
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: false,
        },
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: false,
        },
      ],
    },
    {
      when: '07.05.2022',
      translations: [
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: true,
        },
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: false,
        },
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: false,
        },
      ],
    },
    {
      when: '07.05.2022',
      translations: [
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: true,
        },
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: false,
        },
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: false,
        },
      ],
    },
    {
      when: '07.05.2022',
      translations: [
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: true,
        },
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: false,
        },
        {
          word: 'book',
          translates: ['kitob', 'daftar'],
          collapsed: false,
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
