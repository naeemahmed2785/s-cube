import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.css']
})
export class UserMessageComponent implements OnInit {
  @Input() Title;
  @Input() Message;

  constructor() { }

  ngOnInit() {
  }

}
