// Nouv.jsx

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Nouv.css';

function Nouv() {
  const images = [
    "https://images.macrumors.com/article-new/2023/09/iPhone-14-Pro-Should-You-Buy-2.jpg",
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/winter-sales-design-template-e7730a99973bb1a8092bc5ffdd156ddf_screen.jpg?ts=1576497427",
    "https://i2-prod.walesonline.co.uk/incoming/article27877798.ece/ALTERNATES/s1200d/1_sonyJPG.jpg",
    "https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/291c826b-444a-4e7e-a4de-d9dabb93877e.jpg",
    "https://nba.thedailydunk.co/wp-content/uploads/2020/07/Nike.jpg",
    "https://i.ytimg.com/vi/0hlETabtWAc/maxresdefault.jpg",
    "https://www.passionbeaute.fr/img/cms/Visuels%20Instits%20Marques%202/pub-cat-bf-FINALparfum.jpg",
    "https://www.passionbeaute.fr/img/cms/Visuels%20Instits%20Marques%202/pub-cat-bf-FINALparfum.jpg",
    "https://media.bnn.in.th/media/4718017265768/4718017265768-content1.jpg",
    "https://www.app4phone.fr/wp-content/uploads/2020/04/iPad-Pro-Magic-Keyboard-Pub-Float.jpg",
    "https://www.app4phone.fr/wp-content/uploads/2020/04/iPad-Pro-Magic-Keyboard-Pub-Float.jpg",
    "https://oneshotmedia.fr/wp-content/uploads/2023/11/Argus-P1S-article.jpg",
    "https://megavapeshop.co.uk/wp-content/uploads/2021/07/Voopoo-Drag-X-Plus-Pro-Edition-Preview-Listening-To.jpg",
    "https://apibackend.megapc.tn///uploads/gallerie/1621863361294.webp",
    "https://s2.dmcdn.net/v/TpDNF1YK5jVo12RUy/x1080",
    
  ];


  return (
    <div className='slide-container'>
      <Slide>
        {images.map((el, i) => (
          <div className='slide-item' key={i}>
            <img className='slide-image' src={el}  />
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Nouv;
