import { Component } from '@angular/core';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent {
  transports = [
    { name: 'مطار الجوف', image: 'assets/images/airport.jpg', location: 'الموقع: سكاكا، الجوف', externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572ce4a09ccf42f:0x8a4d6b2bb130f332?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' },
    { name: 'محطة قطار سار بالجوف', image: 'assets/images/train.jpg', location: 'الموقع: سكاكا، الجوف', externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x150cd74da7de3fd7:0xc6e43992784d30c3?entry=s&sa=X&ved=2ahUKEwikrLrwgt2LAxXiXqQEHen2F2UQ4kB6BAgCEAA' },
  ];
}