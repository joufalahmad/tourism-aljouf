export class HomeComponent {
  // البيانات الخاصة بالكارد "المواقع الأثرية"
  historicalSites = [
    {
      name: 'المواقع الأثرية في الجوف',
      description: 'استكشف المواقع الأثرية والتاريخية الرائعة في منطقة الجوف.',
      image: 'assets/images/archaeological-sites-banner.jpg',
      link: '/sites'
    },
  ];

  // البيانات الخاصة بكارد "أهم الخدمات"
  services = [
    {
      name: 'الفنادق',
      description: 'أفضل الفنادق في منطقة الجوف.',
      image: 'assets/images/hotels-banner.jpg',
      link: '/hotels'
    },
    {
      name: 'المطاعم',
      description: 'استمتع بأشهى المأكولات في مطاعم الجوف.',
      image: 'assets/images/restaurants-banner.jpg',
      link: '/restaurants'
    },
    {
      name: 'المستشفيات',
      description: 'أفضل الخدمات الطبية في الجوف.',
      image: 'assets/images/hospitals-banner.jpg',
      link: '/hospitals'
    },
    {
      name: 'المواصلات',
      description: 'طرق النقل والمواصلات في الجوف.',
      image: 'assets/images/transport-banner.jpg',
      link: '/transport'
    },
  ];
}
