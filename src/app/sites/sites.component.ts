import { Component } from '@angular/core';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent {
  sites = [
    {
      name: 'قلعة زعبل الساحرة',
      image: 'assets/images/z.jpg',
      description: 'قلعة زعبل، جوهرة الجوف، تقف شامخة على قمة جبل شاهق، تقدم إطلالة بانورامية مذهلة على المدينة.',
      location: 'سكاكا، الجوف',
      externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572bba14ead2331:0x818109585b5e0381?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' 
    },
    {
      name: 'مسجد عمر بن الخطاب العتيق',
      image: 'assets/images/m.jpg',
      description: 'مسجد عمر بن الخطاب، أحد أقدم المساجد في المملكة العربية السعودية، يتميز بأعمدته الأثرية وتصميمه الفريد الذي يعكس فن العمارة الإسلامية.',
      location: 'دومة الجندل، الجوف',
      externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x150d2f1eca25350b:0x1dfecdc36af88?entry=s&sa=X&ved=2ahUKEwixpKm-rteLAxWeQEEAHUW4IWcQ4kB6BAgBEAA' 
    },
    {
      name: 'بحيرة دومة الجندل ',
      image: 'assets/images/b.jpg',
      description: 'بحيرة دومة الجندل، واحة طبيعية وسط الصحراء، تتميز بمياهها الزرقاء الصافية والنخيل المحيط بها. مكان مثالي للاسترخاء، التصوير الفوتوغرافي، والاستمتاع بالطبيعة الخلابة.',
      location: 'دومة الجندل، الجوف',
      externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x150d2de63961041d:0x365b10036edc900b?entry=s&sa=X&ved=2ahUKEwjD0qbZrteLAxVaaEEAHeDWFuEQ4kB6BAgCEAA'
    },
    {
      name: 'قصر مارد الأسطوري',
      image: 'assets/images/ga.jpg',
      description: 'قصر مارد، قلعة أثرية ضخمة تعود إلى العصور القديمة، تتميز بأسوارها العالية وتصميمها الدفاعي الفريد. يعتبر من أهم المعالم التاريخية في المنطقة، حيث يروي قصصًا عن الحضارات القديمة التي سكنت المنطقة.',
      location: 'دومة الجندل، الجوف',
      externalLink: 'ttps://maps.google.com/maps/place//data=!4m2!3m1!1s0x150d2e5776531fd1:0x5387834f12fba80e?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111'
    },
    {
      name: 'حي الدرع',
      image: 'assets/images/d.jpg',
      description: 'حي الدرع هو حي تاريخي يقع في مدينة سكاكا، ويتميز ببيوته الطينية التقليدية التي تعكس فن العمارة القديم. يعتبر من الأحياء الأثرية التي تجذب السياح لمشاهدة التراث العمراني الفريد.',
      location: 'سكاكا، الجوف',
      externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x150d2f0036097db3:0xd84384316ac653d3?entry=s&sa=X&ved=2ahUKEwiOrZKir9eLAxWFRKQEHRQsHKsQ4kB6BAgCEAA'
    },
    {
      name: 'آثار الرجاجيل',
      image: 'assets/images/A.jpg',
      description: 'آثار الرجاجيل هي مجموعة من الأعمدة الحجرية الغامضة التي يعود تاريخها إلى آلاف السنين. تقع في صحراء الجوف، ويعتقد أنها كانت تستخدم لأغراض فلكية أو دينية في العصور القديمة.',
      location: 'صحراء الجوف',
      externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572c7003bf93041:0x67f4242765bbf99e?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111'
    },
    {
      name: 'بئر سيسرا',
      image: 'assets/images/s.jpg',
      description: 'بئر سيسرا هو بئر تاريخي يقع في دومة الجندل، ويعود تاريخه إلى العصور القديمة. يعتقد أن البئر كان مصدرًا رئيسيًا للمياه في المنطقة، ويحيط به العديد من القصص والأساطير التاريخية.',
      location: 'دومة الجندل، الجوف',
      externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572c95827853ceb:0x409a6be75f14b03c?entry=s&sa=X&ved=2ahUKEwinj6rIr9eLAxXqTaQEHdANH8IQ4kB6BAgCEAA'
    },
  {
    name: 'قصر كاف',
    image: 'assets/images/g.jpg',
    description: 'قصر كاف هو أحد المعالم الأثرية البارزة في منطقة الجوف، ويقع في قرية كاف التاريخية. يعود تاريخ القصر إلى العصور القديمة، كان القصر يستخدم كحصن دفاعي ومنزل للحكام في الماضي .',
    location: 'قرية كاف، الجوف',
    externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x15101236ef490de9:0xa154d7dbccc4a69b?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111'
  },
    {
      name: 'متاحف الجوف',
      image: 'assets/images/t.jpg',
      description: 'تضم منطقة الجوف عدة متاحف تعرض التراث الثقافي والتاريخي للمنطقة، بما في ذلك المتحف الإقليمي في سكاكا الذي يعرض قطعًا أثرية تعود إلى عصور ما قبل التاريخ.',
      location: 'سكاكا، الجوف',
      externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x150d2e5792f96c95:0xfd277e4518ed9408?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111'
    }
  ];
}