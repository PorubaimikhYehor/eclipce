import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ButtonTogglesItemConfig {
  id: string;
  name: string;
  selected: boolean;
}
export interface ButtonTogglesConfig {
  items: ButtonTogglesItemConfig[];
  selectedId: string;
}


@Component({
  selector: 'app-button-toggles',
  templateUrl: './button-toggles.component.html',
  styleUrls: ['./button-toggles.component.scss']
})
export class ButtonTogglesComponent implements OnInit {
  @Output() change: EventEmitter<string> = new EventEmitter();

  // @Input() config: ButtonTogglesConfig | undefined;
  selected = "week";

  constructor() { }

  ngOnInit(): void {
  }

  click(str: string): void {
    this.change.emit(str);
    this.selected = str;
  }
}
