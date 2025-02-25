import { Component } from '@angular/core';

@Component({
  selector: 'app-cafes',
  templateUrl: './cafes.component.html',
  styleUrls: ['./cafes.component.css']
})
export class CafesComponent {
  cafes = [
    { name: 'تعاليل', image: 'assets/images/tallel.jpg', location: 'الموقع: سكاكا الجوف', externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572bba159241e7d:0x8df9b8bb9e77580b?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' },
    { name: 'بالي', image: 'assets/images/bali.jpg', location: 'الموقع: سكاكا الجوف', externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572bb890280db45:0x43c1d9660b5903cb?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' },
    { name: 'ELM CAFE', image: 'assets/images/elm.jpg', location: 'الموقع: سكاكا الجوف', externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572bbc4271cbc81:0xa8be6e80407a8722?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' },
    { name: 'TOOL', image: 'assets/images/tool.jpg', location: 'الموقع: سكاكا الجوف', externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572bb0d81fdec43:0xdb5ba154cfd77adc?entry=s&sa=X&ved=2ahUKEwi15_XZ5NyLAxVZSfEDHbvcM5gQ4kB6BAgBEAA' },
    { name: 'TO SET', image: 'assets/images/toset.jpg', location: 'الموقع: سكاكا الجوف', externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572bb1982d0da17:0xb36241c870cb2cd?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' },
    { name: 'عذق', image: 'assets/images/athq.jpg', location: 'الموقع: سكاكا الجوف', externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572bde9d2252543:0x792e9ad4a5b0dc91?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' },
    { name: 'ath', image: 'assets/images/ath.jpg', location: 'الموقع: سكاكا الجوف', externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572bb930a246a89:0xff3813bfca7c26fb?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' },
    { name: 'لوسيل', image: 'assets/images/lusail.jpg', location: 'الموقع: سكاكا الجوف', externalLink: '4m2!3m1!1s0x1572b9230bf2155d:0x3130038292fe2aa?entry=s&sa=X&ved=2ahUKEwiPlIus59yLAxUQYEEAHc85L70Q4kB6BAgCEAA' },
    { name: 'Bella Bite', image: 'assets/images/bellabite.jpg', location: 'الموقع: سكاكا الجوف', externalLink: 'https://www.google.com/maps?q=29.979507,40.183205&fbclid=PAZXh0bgNhZW0CMTEAAabEoCeByotGQS8q98NtN0_LWqx70EWFGKNf9xZSh9_Yt0fYOfbDgqgPixc_aem_O05dnI98f69LDiRsW80w0w' }
  ];
}