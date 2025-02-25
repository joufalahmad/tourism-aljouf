import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-festivals',
  templateUrl: './festivals.component.html',
  styleUrls: ['./festivals.component.css']
})
export class FestivalsComponent implements AfterViewInit {
  @ViewChild('festivalVideo') festivalVideo!: ElementRef<HTMLVideoElement>;

  festivals = [
    {
      name: 'مهرجان زيتون الجوف الدولي',
      description: 'مهرجان الزيتون الدولي هو حدث سنوي يقام في منطقة الجوف للاحتفاء بقطاف الزيتون وتقديم أفضل منتجات الزيتون. يشمل المهرجان فعاليات ثقافية وترفيهيه.',
      video: 'assets/video/olive1.mp4', 
      twitterLink: 'https://twitter.com/aljouf_olivefes'
    },
    {
      name: 'مهرجان التمور بالجوف',
      description: 'مهرجان التمور بالجوف هو حدث سنوي يعرض أفضل أنواع التمور في المنطقة، مع فعاليات ترفيهية وثقافية تبرز أهمية التمور في التراث المحلي.',
      video: 'assets/video/tmour1.mp4', 
      twitterLink: 'https://twitter.com/jdfestival'
    }
  ];

  constructor() {}

  ngAfterViewInit() {
    const video: HTMLVideoElement = this.festivalVideo.nativeElement;
    if (video) {
      console.log('الفيديو موجود:', video);
      video.muted = true;
      video.play(); 
    } else {
      console.error('الفيديو غير موجود!');
    }
  }

  navigateToTwitter(link: string) {
    window.open(link, '_blank'); 
  }
}