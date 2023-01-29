import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar-component',
  templateUrl: './search-bar-component.component.html',
  styleUrls: ['./search-bar-component.component.scss']
})
export class SearchBarComponentComponent implements OnInit {
  filterstring: string = '';
  constructor() {}

  ngOnInit(): void {}

  @Output()
  searchtextchange: EventEmitter<string> = new EventEmitter<string>();
  onSearchTextChange(){
    this.searchtextchange.emit(this.filterstring)
  }
}
