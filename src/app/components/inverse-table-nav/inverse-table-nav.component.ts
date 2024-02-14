import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inverse-table-nav',
  standalone: true,
  imports: [],
  templateUrl: './inverse-table-nav.component.html',
  styleUrl: './inverse-table-nav.component.css'
})
export class InverseTableNavComponent implements OnInit {
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
