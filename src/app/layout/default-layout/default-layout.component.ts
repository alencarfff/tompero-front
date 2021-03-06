import { Component, Input } from '@angular/core';

@Component({
  selector: 'tp-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent {
  @Input() padding: boolean;
  @Input() title: string;
}
