import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-nav',
  standalone: true,
  templateUrl: './table-nav.component.html',
  styleUrl: './table-nav.component.css'
})
export class TableNavComponent implements OnInit{
  @Input() public navId: string = '';
  @Input() public activeId: string = '';
  @Output() public changeActiveEvent = new EventEmitter<string>();
  active: boolean = false
  ngOnInit(): void {
    if (this.navId == this.activeId) this.active = true
  }

  changeActive(){
    this.changeActiveEvent.emit(this.navId)
  }

}
