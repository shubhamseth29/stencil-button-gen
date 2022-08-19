import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  @Prop() first: string;

  @Prop() middle: string;

  @Prop() last: string;

  @Event() buttonEvent: EventEmitter;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  emitButtonEvent(){
    this.buttonEvent.emit({
      "first-name": this.first,
      "middle-name": this.middle,
      "last-name": this.last
    })
  }

  render() {
    return <div>
      <div>Hello, World! I'm {this.getText()}</div>
      <button onClick={this.emitButtonEvent.bind(this)}>Emit button </button>
    </div>;
  }
}
