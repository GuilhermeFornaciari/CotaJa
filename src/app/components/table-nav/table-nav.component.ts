import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-nav',
  standalone: true,
  templateUrl: './table-nav.component.html',
  styleUrl: './table-nav.component.css'
})
export class TableNavComponent{
  @Input() public navId: number = 0
  @Input() public activeId: number = 0
  @Output() public changeActiveEvent = new EventEmitter<number>();
  changeActive(){
    this.changeActiveEvent.emit(this.navId)
  }

}
