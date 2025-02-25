import { Component } from '@angular/core';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent {
  entertainmentPlaces = [
  
    { 
      name: 'اسطبل لجام الخيل ', 
      image: 'assets/images/lijam-stables.jpg', 
      location: 'الموقع: سكاكا، الجوف', 
      description: 'اسطبل لجام الخيل يوفر تجربة فريدة لمحبي ركوب الخيل .', 
      externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572bfbb587d98c7:0x18ad0b853f0d5dff?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' 
    },
    { 
      name: 'اسطبل جوفيه', 
      image: 'assets/images/joufieh-stables.jpg', 
      location: 'الموقع: سكاكا، الجوف', 
      description: 'اسطبل جوفيه يقدم خدمات ركوب الخيل والفعاليات الترفيهية المرتبطة بها.', 
      externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572bf00024e7723:0xe36669fa1e76ced1?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' 
    },
      { 
      name: 'العاب الجوف ', 
      image: 'assets/images/jouf-games.jpg', 
      location: 'الموقع: سكاكا، الجوف', 
      description: 'مكان ترفيهي رائع يحتوي على العديد من الألعاب المناسبة لجميع الأعمار.', 
      externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572ba0d7c066c73:0xa18f99c3d5051c58?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' 
    },
    { 
      name: 'عالم الترامبولين', 
      image: 'assets/images/trampoline-world.jpg', 
      location: 'الموقع: سكاكا، الجوف', 
      description: 'مكان ترفيهي مليء بالمرح مع مجموعة متنوعة من ألعاب الترامبولين   .', 
      externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572bb3da0df7389:0xeb1269e6b28c3141?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' 
    }
   
  ];
}