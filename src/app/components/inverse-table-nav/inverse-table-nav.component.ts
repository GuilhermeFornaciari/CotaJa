import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inverse-table-nav',
  standalone: true,
  imports: [],
  templateUrl: './inverse-table-nav.component.html',
  styleUrl: './inverse-table-nav.component.css'
})
export class InverseTableNavComponent {
  @Input() public navId: number = 0;
  @Input() public activeId: number = 0;
  @Output() public changeActiveEvent = new EventEmitter<number>();

  changeActive(){
    this.changeActiveEvent.emit(this.navId)
  }

}
