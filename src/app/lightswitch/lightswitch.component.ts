import { Component } from '@angular/core';

@Component({
  selector: 'lightswitch-comp',
  templateUrl: './lightswitch.component.html'
})
export class LightswitchComponent {
  isOn = false;
  clicked() { this.isOn = !this.isOn; }
  get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }
}
