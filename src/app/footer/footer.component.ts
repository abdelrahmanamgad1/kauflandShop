import { Component } from '@angular/core';
import { FooterStaticData } from './footer.static';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  footerData = FooterStaticData;
}
