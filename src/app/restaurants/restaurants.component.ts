import { Component } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent {
  restaurants = [
    { name: 'هولو', image: 'assets/images/hollow.jpg', location: 'الموقع: سكاكا الجوف', externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572bb7c42b97a9f:0x70ed02cb2466dc0c?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' },
    { name: 'مطعم روش للمأكولات اللبنانية', image: 'assets/images/roshn.jpg', location: 'الموقع: سكاكا الجوف', externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572bbaca0b5699b:0x4d635502650a4c8e?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' },
    { name: 'مطعم مشراف', image: 'assets/images/mshraf.jpg', location: 'الموقع: دومة الجندل', externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x150d2f0b26af2b89:0xed7d781b28843823?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' },
    { name: 'مطعم نفس', image: 'assets/images/nafas.jpg', location: 'الموقع: سكاكا الجوف', externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572bbdbab1d27ab:0xaf66d4ea9bdd9e3c?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' },
    { name: 'مطعم ون هاندريد', image: 'assets/images/one100.jpg', location: 'الموقع: سكاكا الجوف', externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572bbb5de89959f:0xc733717fcb8049c7?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' },
    { name: 'مطعم أماس', image: 'assets/images/amas.jpg', location: 'الموقع: سكاكا الجوف', externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572b906ba0080bf:0x3925a25ee26d9972?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' },
    { name: 'مطعم إنتيكو', image: 'assets/images/antico.jpg', location: 'الموقع: سكاكا الجوف', externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572b9000c5fbf9f:0x2f28c109b7bc7772?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' },
    { name: 'مطعم بيت بتال', image: 'assets/images/btall.jpg', location: 'الموقع: سكاكا الجوف', externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572bba8bc171311:0xbe301b3bf17ffd13?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' },
    { name: 'Five AM', image: 'assets/images/FiveAM.jpg', location: 'الموقع: سكاكا الجوف', externalLink: 'https://maps.google.com/maps/place//data=!4m2!3m1!1s0x1572bb5a95bc97d7:0x25b115deb514ca7?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111' }
  ];
}