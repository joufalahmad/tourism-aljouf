import { Component } from '@angular/core';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent {
  governmentHospitals = [
    { name: 'مستشفى الملك عبدالعزيز التخصصي', image: 'assets/images/hospital1.jpg', location: 'الموقع: سكاكا الجوف', externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572b90bd51c5179:0x4877ee16b122861a?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' },
    { name: 'مستشفى الأمير متعب بن عبدالعزيز', image: 'assets/images/hospital2.jpg', location: 'الموقع: سكاكا الجوف', externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572bbd7b15331ab:0x23f1e7e8284a57d6?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' },
    { name: 'مستشفى النساء والولادة', image: 'assets/images/hospital3.jpg', location: 'الموقع: سكاكا الجوف', externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572bbd46d40d367:0x19f9a8355ece53d9?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' }
  ];

  privateHospitals = [
    { name: 'مستشفى فارس الهداج', image: 'assets/images/hospital4.jpg', location: 'الموقع: سكاكا الجوف', externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572c644f5b6f82b:0x20ae4b639010db7a?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' },
    { name: 'مجمع أماس الطبي', image: 'assets/images/hospital5.jpg', location: 'الموقع: سكاكا الجوف', externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572bbde47ab9fcd:0xf9e8718d94225f0f?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' },
    { name: 'مجمع كيان النصر الطبي', image: 'assets/images/hospital6.jpg', location: 'الموقع: سكاكا الجوف', externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572bbe61077433d:0x470bc6ddb94472ab?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' }
  ];
}