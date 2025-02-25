import { Component } from '@angular/core';

@Component({
  selector: 'app-malls',
  templateUrl: './malls.component.html',
  styleUrls: ['./malls.component.css']
})
export class MallsComponent {
  malls = [
    { name: 'الجوف بلازا', image: 'assets/images/joufplaza.jpg', location: 'الموقع: سكاكا، الجوف', externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572b97a2427483d:0xd1e45fc98ee46681?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' },
    { name: 'الجوف سنتر', image: 'assets/images/joufcenter.jpg', location: 'الموقع: سكاكا، الجوف', externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572bb919c5b0b7d:0x17567a53e1621d13?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' }
  ];
}