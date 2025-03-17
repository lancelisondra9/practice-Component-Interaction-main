import { Component,EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() inputText:string = '';


outputValue: EventEmitter<string> = new EventEmitter<string>();

message:string = '';

sendMessage(text:string) {
  this.message = text;
  this.outputValue.emit(this.message)
}



}
