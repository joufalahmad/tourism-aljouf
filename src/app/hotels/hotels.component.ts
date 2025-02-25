import { Component } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent {
  hotels = [
    { name: 'فندق لوبارك', image: 'assets/images/loupark.jpg', location: 'الموقع: سكاكا، الجوف', externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572bb5ba7b89961:0x9550cfe88af1c7b7?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' },
    { name: 'توليب بلازا', image: 'assets/images/tulip-plaza.jpg', location: 'الموقع: سكاكا، الجوف', externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572bbbca503243d:0x4f76a679b0459941?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' },
    { name: 'فندق الحنوة', image: 'assets/images/alhanoua.jpg', location: 'الموقع: سكاكا، الجوف', externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572bb22c3007faf:0x857351f01cd4d2ee?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' },
    { name: 'فندق ايوا اكسبرس', image: 'assets/images/ewa-express.jpg', location: 'الموقع: سكاكا، الجوف', externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572b9002651c591:0x6a1b7612b1037c94?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' },
  ];
}