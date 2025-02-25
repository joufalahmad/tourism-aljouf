import { Component, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'app-energy',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.css']
})
export class EnergyComponent implements AfterViewInit {
  @ViewChildren('energyVideo') energyVideos!: QueryList<ElementRef<HTMLVideoElement>>;

  energyStations = [
    {
      name: 'محطة سكاكا للطاقة الشمسية',
      description: 'محطة سكاكا للطاقة الشمسية هي أول محطة للطاقة الشمسية في المملكة العربية السعودية، وتعد جزءًا من رؤية 2030 لتعزيز استخدام الطاقة المتجددة.',
      video: 'assets/video/energy2.mp4', 
      websiteLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572d10016110f19:0xc39e4606fe4292dc?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' // رابط الموقع الرسمي
    },
    {
      name: 'محطة دومة الجندل لطاقة الرياح',
      description: 'محطة دومة الجندل لطاقة الرياح هي واحدة من أكبر محطات طاقة الرياح في الشرق الأوسط، وتلعب دورًا رئيسيًا في تحقيق أهداف الطاقة المتجددة في المملكة.',
      video: 'assets/video/energy1.mp4', 
      websiteLink: 'https://www.google.com/maps/place/XW33%2BQG+%D9%85%D8%B1%D8%A7%D9%88%D8%AD+%D8%A7%D9%84%D8%B7%D8%A7%D9%82%D8%A9%D8%8C+%D8%B3%D9%83%D8%A7%D9%83%D8%A7+74698%E2%80%AD/@29.9543919,39.9037811,17z/data=!4m6!3m5!1s0x150d35cf50dfef49:0x78236258a785478e!8m2!3d29.9543919!4d39.9037811!16s%2Fg%2F11t9bc4db7' // رابط الموقع الرسمي
    }
  ];

  constructor() {}

  ngAfterViewInit() {
    this.energyVideos.forEach((videoElement: ElementRef<HTMLVideoElement>) => {
      const video = videoElement.nativeElement;
      if (video) {
        console.log('الفيديو موجود:', video); 
        video.muted = true; 
        video.play(); 
        
      } else {
        console.error('الفيديو غير موجود!');
      }
    });
  }

  navigateToWebsite(link: string) {
    window.open(link, '_blank'); 
  }
}