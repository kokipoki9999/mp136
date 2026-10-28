import React, { useState, useMemo } from 'react';

type Product = {
  src: string;
  alt: string;
  name: string;
  href: string;
};

const PRODUCTS: Product[] = [
  {
    src: '/fancyfountaindecor.jpg',
    alt: 'Tabletop Water Fountain',
    name: 'Tabletop Water Fountain',
    href: 'https://www.amazon.com/Homedics-Tabletop-Water-Fountain-Soothing/dp/B000QTUJXS?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=7dd5629259de22b5b7f63a9c965ecc3e&language=en_US&ref_=as_li_ss_tl',
  },
  {
    src: '/rabbitfurthrow.png',
    alt: 'The Yearly Favorite: The Bubble Throw Blanket',
    name: 'Plush Throw Blanket',
    href: 'https://www.amazon.com/BENVWE-Blanket-Fleece-Bubble-Fluffy/dp/B0CGM57YFQ?pd_rd_w=LbhLW&content-id=amzn1.sym.679481c3-2bf4-4843-80c0-ffb319282e84%3Aamzn1.symc.c3d5766d-b606-46b8-ab07-1d9d1da0638a&pf_rd_p=679481c3-2bf4-4843-80c0-ffb319282e84&pf_rd_r=W103DQ19YNVZ8AQHX7Q3&pd_rd_wg=HWQoW&pd_rd_r=86571db8-2fd2-416e-9185-21f055141e5d&pd_rd_i=B0CGM57YFQ&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=d414ac45b70c97f71920cdfe3158591b&language=en_US&ref_=as_li_ss_tl',
  },
  {
    src: '/theolivetreefinal.png',
    alt: "L'Olivier",
    name: 'Faux Olive Tree, Natural Trunk',
    href: 'https://www.amazon.com/Kazeila-Artificial-Office-Natural-Lifelike/dp/B0BKRFBSTF?crid=2HRCQ2K70RQSV&dib=eyJ2IjoiMSJ9.sC_u9ScCO97iF2uE4mjUTheu0-zSuN-fEY4XIdt7QyY6jO3vkM4OpmwAWBs4R5yVZUvIC4Zf8Sp85Xxz_Yhuc77pBm-Ek0idYs1YsAlKCfo.AYBHMo1VauNHY9dab4uhTkM_FiwtIw_j_INtWg8MfWk&dib_tag=se&keywords=kazeil%2Bfaux%2Btree%2Bolivier&qid=1754943935&sprefix=kazeil%2Bfaux%2Btree%2Bolivier%2C%2Caps%2C82&sr=8-6&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=71beb6d1e54b94ccc21491ab70da007b&language=en_US&ref_=as_li_ss_tl',
  },
  {
    src: '/largestoragebasket.png',
    alt: 'The Basket',
    name: 'Large Storage Basket',
    href: 'https://www.amazon.com/KAKAMAY-Blanket-Baskets-storage-Laundry/dp/B09Z2SYJQD?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=7b1f7e7f221e1d5f45c2f434f888da9b&language=en_US&ref_=as_li_ss_tl',
  },
  {
    src: '/triominivase.png',
    alt: 'The Small Trio',
    name: 'Matte Vase Set, 3pcs',
    href: 'https://www.amazon.com/Smiletag-Ceramic-Farmhouse-Bookshelf-Entryway/dp/B0BD7FG9HX?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=d8099c8e991ebda0c644a81a43a24da5&language=en_US&ref_=as_li_ss_tl',
  },
  {
    src: '/marblebowl.png',
    alt: '100% Natural, Heavy Marble Ruffle Bowl',
    name: 'Ruffle Bowl',
    href: 'https://www.amazon.com/Marble-Fruit-Decorative-Ruffle-Floral/dp/B0BW7QLRXY?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=fa0df63704f80aa00921fe260f3bd8ff&language=en_US&ref_=as_li_ss_tl',
  },
  {
    src: '/vaseluxenoir.png',
    alt: 'Large Ceramic Rustic Vase',
    name: 'Bronze Vase',
    href: 'https://www.amazon.com/Vaseking-Minimalist-Decorative-Farmhouse-Decoration/dp/B0CW2JG3JN?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=6770b4f8221cdf6f3ecd13c212483e83&language=en_US&ref_=as_li_ss_tl',
  },
  {
    src: '/lampeclasse.png',
    alt: 'Large, Contemporary Mushroom Lamp (Brass)',
    name: 'Venus Mushroom Table Lamp',
    href: 'https://www.amazon.com/Brightech-Contemporary-Mushroom-Dimmable-Bedroom/dp/B0C2VT9TJY?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=570f5a4bd14f7625b9bef13f5cf24c17&language=en_US&ref_=as_li_ss_tl',
  },
  {
    src: '/pillowcovers.png',
    alt: 'Cream White, Soft Corduroy Pillow Cases',
    name: 'Corduroy Throw Pillow Covers',
    href: 'https://www.amazon.com/MIULEE-Corduroy-Decorative-Striped-Farmhouse/dp/B0CVVW727H?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=52a598a13c608cd7dafadeb942f7da0e&language=en_US&ref_=as_li_ss_tl',
  },
  {
    src: '/bathroomset.png',
    alt: 'Cream White, Bathroom Countertop Accessories',
    name: 'Bathroom Accessories Set, 4pcs',
    href: 'https://www.amazon.com/Ceramic-Bathroom-Accessories-Set-Pcs/dp/B0DJM6FMSP?ie=UTF8&linkCode=ll1&tag=maisonpacem05-20&linkId=b63c66b0fe29f6dea31324e7710a5c29&language=en_US&ref_=as_li_ss_tl',
  },
  {
    src: '/ballaccent.png',
    alt: 'Cream White, Accent Throw Pillow',
    name: 'Ball Throw Pillow',
    href: 'https://www.amazon.com/Gerlisay-Spherical-Pillows-Cushion-Ornament/dp/B0CJ2NGZL4?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=a15c28540e48a9f3ac2a9a53c6b4f6f4&language=en_US&ref_=as_li_ss_tl',
  },
  {
    src: '/swirlcandle.png',
    alt: '"Swirl" Soy Wax Decor Candle',
    name: 'Sculptural Swirl Candle',
    href: 'https://www.amazon.com/LAWA-Swirl-Candle-Beautiful-Housewarming/dp/B0BY3WCJ1K?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=65f7ae7a207235a01f6a6436855cb755&language=en_US&ref_=as_li_ss_tl',
  },
  {
    src: '/wide-belly-table-vase.png',
    alt: 'The Heart Vase',
    name: "Wide-Belly 'Heart' Vase",
    href: 'https://www.amazon.com/Ceramic-Vintage-Terracotta-Farmhouse-Fireplace/dp/B0GBWZWLCH?pd_rd_i=B0GBWZWLCH&pd_rd_w=t2Z0G&content-id=amzn1.sym.4a6480f2-00b3-4e33-a59d-ae768449426b&pf_rd_p=4a6480f2-00b3-4e33-a59d-ae768449426b&pf_rd_r=WSTT3CEVMNS9RNFSZK0K&pd_rd_wg=mPVwF&pd_rd_r=5ffdd193-7ff4-487d-8051-b4b8226d00eb&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=733379e917aa87859ca72844d7fccebb&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/simplechair.png',
    alt: 'Accent Chair',
    name: 'Accent Chair',
    href: 'https://www.amazon.com/Safavieh-Collection-Portland-Pillow-Accent/dp/B08C7XV7MS?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=3b36a8250ab26e283ecb98094f5ef83d&language=en_US&ref_=as_li_ss_tl',
  },
  {
    src: '/chunky-knit-blanket.png',
    alt: 'Chunky Knit Throw Blanket',
    name: 'Chunky Knit Throw Blanket',
    href: 'https://www.amazon.com/Adyrescia-Chunky-Blanket-Throw-Chenille/dp/B09BC4YFJM?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=05231935b6ca4cdeb9cd4d29d1db1a83&language=en_US&ref_=as_li_ss_tl',
  },
  {
    src: '/funflannelmirror.png',
    alt: 'Irregular Flannel-Wrapped Mirror',
    name: 'Irregular Flannel-Wrapped Mirror',
    href: 'https://www.amazon.com/Honyee-Flannel-Wrapped-Irregular-Cloakroom/dp/B0BKGCMKJJ?ie=UTF8&th=1&linkCode=ll1&tag=maisonpacem05-20&linkId=cf8509a314881308881c2c972312b6aa&language=en_US&ref_=as_li_ss_tl',
  },
  {
    src: '/ribbed-pillar-candle-set.png',
    alt: 'Scented Ribbed Pillar Candle Set',
    name: 'Scented Pillar Candle Set, 2 pcs',
    href: 'https://www.amazon.com/Aesthetic-Sandalwood-Minimalist-Geometric-Sculptural/dp/B0FX9L5RLQ?crid=13YKI5EU8RLYX&dib=eyJ2IjoiMSJ9.Mk_ImbgVMK-106KFLrOnAy04HptVR37jV2XI0m6K_RLcFU-ZpsP6bpNuMZBOLxKxXGahFZkbqOrHzFeWuUlN9IcWPCidlnzwe4f_2vjIt9bDeE43EyBuuzSA1J14kLd567iyjtPUiOzTUYA_vd1AhtmwuZb00RAf2NugyRZtq5x6LBGP8dabjsV4zWjFWqRkdvBggFht2LbCDYGrsxm38ak5VQX7H_8iul247gH3GabN32dTbKcRPZmhF_sIj-WnTheo5VjYIfEz4L3KeLYFV2Cd1cdgtJwLdm0-fR49FW4.0WDxi9gl2izFvbr0vQDDJ9SpZsbpayt7Ks0X3pA3sPs&dib_tag=se&keywords=lawa+hourglass+pillar+candle+-+large+beautiful+handmade+pillar+scented+soy+wax+elegant+bubble+aesthetic+candle+housewarming+gift+home+room+shelf+decor+idea+-+white+%28set+of+2%29&nsdOptOutParam=true&qid=1779398420&sprefix=%2Caps%2C246&sr=8-13&linkCode=ll2&tag=maisonpacem05-20&linkId=d0f7fbc7f8341a05b40fe7f30faa0b1c&language=en_US&ref_=as_li_ss_tl',
  },
  {
    src: '/candleholders.png',
    alt: '100% Travertine Stone Candle Holders From Turkey (Set of 2)',
    name: 'Travertine Candle Holder Set, 2 pcs',
    href: 'https://www.amazon.com/WORHE-Holders-Natural-Travertine-Candlestick/dp/B094QCMTJJ?crid=9GCCXL76PQJR&dib=eyJ2IjoiMSJ9.a8_by3yxuPjorhUAlbffBtoE6vIilIyDIjU1BrsJAMRwMlDYoqpD0qGuanMVkEGYNZRw_2I-361O4e5WySYvk2E54O9T6HzFT4TsMaF_FTYUI2OX5N4ZvxqJB9wPnTtJH-Ke-FtUhoctEf-H0MrL0KGnQCAI674VQsI71D0ZxKPqc1kEjhQdTogmL_eeZHencTwyA-7rqZLWGzy0tSMOEp9J7NJTibrXP_CITxu22NZwxscMAHmn1VvZmrDX8_--PtLQFux_oCqTkfSaAL1sv468axS3lurDaIPvPsMXoNM.lrR25tJDmPsnHsDodnXRE9ufGAPctREYRP9sUZnnhN4&dib_tag=se&keywords=True%2BNatural%2BTravertine%2BStone&qid=1779739506&sprefix=true%2Bnatural%2Btravertine%2Bstone%2Caps%2C114&sr=8-6&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=960c078ca8e8b0ef6f8c562f3cb17838&language=en_US&ref_=as_li_ss_tl',
  },
  {
    src: '/tulip-stems-decor.jpg',
    alt: 'Lifelike Tulip Stems',
    name: 'Faux Tulips, 20 pcs',
    href: 'https://www.amazon.com/Mandys-Flowers-Artificial-Kitchen-Decorations/dp/B09BYKKLTX?_encoding=UTF8&pd_rd_w=htAGn&content-id=amzn1.sym.a6dce754-9901-41a6-a629-a32800521c61%3Aamzn1.symc.5a16118f-86f0-44cd-8e3e-6c5f82df43d0&pf_rd_p=a6dce754-9901-41a6-a629-a32800521c61&pf_rd_r=A9JHMQBQGTJETMREH404&pd_rd_wg=MEKrJ&pd_rd_r=545995b8-45e9-404f-95fc-ee0878a2c522&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=a9103b1443c296edf65d4494e006bb38&language=en_US&ref_=as_li_ss_tl',
  },
  {
    src: '/vintage-mirror copy.jpg',
    alt: 'The Vintage Mirror',
    name: 'Gold Vintage Mirror',
    href: 'https://www.amazon.com/WallBeyond-Vintage-Bathroom-Fireplace-Entryway/dp/B0DDBNYGK8?crid=F3LZYXHVCGD7&dib=eyJ2IjoiMSJ9.6hfDJ8UAD1LH6yi_5h7Uh7BIDWXAklI991xK12H9xeWRKgF2Ee-BDCJ14nrfGcuGMH87JRXAFpRNQf_xGH4GHDT4_vWx3d4CwFPLs3kT_p80S6VZ84CUA0XqUnQknejyR-2Xm-GwS-usV3Ze3sBzFQozLDsUgmuGSRNGokwPVh7hOWqxWVI4DZPusOsMCTahCviTX4M589DI8YsYEcdW2Hsic0NiTrhjx_uw_K0A19zy8s0wOb-DV-zXEv2WDHl3QYdPQHeaCo14Ho41Z2XmPLM62FcKkF1-VyB03GMhb80.ypxMs363WitH_i0G9xaIODij1F5KgT55dOplG7FfAhI&dib_tag=se&keywords=vWallBeyond%2BGold%2BVintage%2BMirror%2Bfor%2BVanity%2B22x30%2BInch%2C%2BGold%2BAntique%2BMirror%2Bwith%2BOrnate%2BFrame%2C%2BArched%2BVintage%2BWall%2Bfor%2BBathroom%2C%2BLiving%2BRoom%2C%2BFireplace%2C%2BEntryway&nsdOptOutParam=true&qid=1780343961&sprefix=vwallbeyond%2Bgold%2Bvintage%2Bmirror%2Bfor%2Bvanity%2B22x30%2Binch%2C%2Bgold%2Bantique%2Bmirror%2Bwith%2Bornate%2Bframe%2C%2Barched%2Bvintage%2Bwall%2Bfor%2Bbathroom%2C%2Bliving%2Broom%2C%2Bfireplace%2C%2Bentryway%2Caps%2C611&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=5b530e924ba33e2eba91d45ce77fb909&language=en_US&ref_=as_li_ss_tl',
  },
  {
    src: '/faux-silk-peonies-for-decor-bedroom-wedding.png',
    alt: 'Faux Silk Peonies',
    name: 'Faux Peonies',
    href: 'https://www.amazon.com/dp/B0G5YFGNW8/ref=sspa_dk_detail_4?pd_rd_i=B0G5YFGNW8&pd_rd_w=bYNBs&content-id=amzn1.sym.af2be12d-373e-4c68-a933-d40df60554fe&pf_rd_p=af2be12d-373e-4c68-a933-d40df60554fe&pf_rd_r=5ZRRGE3ZTZDMWCEMQE3P&pd_rd_wg=r6HY1&pd_rd_r=feb3181b-8d7d-44c2-a66a-141b4b794d5f&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1',
  },
  {
    src: '/contemporary-rustic-decorative-vase.png',
    alt: 'Rustic Terracotta Vase',
    name: 'Terracotta Textured Vase',
    href: 'https://www.amazon.com/Farmhouse-Terracotta-Vintage-Suitable-ZSHLXM/dp/B0DL9HKKH8?crid=18ZCCVVX2TQXW&dib=eyJ2IjoiMSJ9.Z92rMQc1aQ0OpND9oXYw6vLu0IcQFHhT1aCUUssoNgtMyR_Fhdyi5gXIqbYp-P43gSxnkAd0lh3eq-_usxVmetsquJ_YICx3FwlwDu7sUT8o3zZhP8_DcFAXsHxiasxuDsFU9e9cm7yav13U3oSPpIRaGurkD3dQIAcDWNHpa33ay-FALDpeX6V3jMOqRsfLnwt0noWpbnKre8C3G6viSIpG-bT1olxd9HNehGpzLrDUeLsAHfwPe1k41O7iqDqfgMnsSqGWJC16BwnC2cfe_Fj9YA3AW1B3nDere35LyjE.5dj_D7u38IJA_d4zxrceouGest9qZB2STuZU-R8irI4&dib_tag=se&keywords=aesthetic%2Bvase&qid=1782605419&sprefix=aesthetic%2Bvas%2Caps%2C150&sr=8-39&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=a93dbcb0840d9ae6ad399dbe56642eb2&language=en_US&ref_=as_li_ss_tl',
  },
  {
    src: '/contemporary-clear-smoked-plant-glass-vase.png',
    alt: 'Smoked Glass Vase',
    name: 'Smoked Glass Vase',
    href: 'https://www.amazon.com/GeLive-Vase-Glass-Clear-Centerpiece/dp/B0BZVN3T6D?crid=35IZ4CBJ0M7VK&dib=eyJ2IjoiMSJ9._M5Kekea99avVSy8wDaN3t8vd4FUvCG0E54mXLcQ3YgIXqKI6kECA7pOmW51687L5xmFjBvvxbdhOLJlKLudiWtkfdl8KCWS2phBAAJ66bMFLr_A7QZpsn494uN4E-arnJBHGR0PyAkSAIbLCFYwpqUr6YvdUmtILVYG3z3P5ilYmHpY0HCSLXbEem7DG6xWnl1duClWNnWDYdnzUsQGTBTEQyt2iiQMfdeV4llmTVvNkDHVGUf73xXXxSwc0aPZtasVXpBuTvs2tygYWkQvXHr77U8Ogm_afLhMEFkPXvQ.MLXkPOyrKutNcZHeH-OCguI5l8lcyXQ-b4p3letmWKE&dib_tag=se&keywords=contemporary%2Bvase&qid=1782674191&sprefix=contemporary%2Bvas%2Caps%2C148&sr=8-6&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=9b2143916657c073349a20c0ec2fa852&language=en_US&ref_=as_li_ss_tl',
  },
  {
    src: '/cherry-blossom-stems-decor-contemporary.png',
    alt: 'Sakura Branches',
    name: 'Sakura Branches',
    href: 'https://www.amazon.com/dp/B0DRV5P78L/ref=twister_B093CNGXJW?_encoding=UTF8&th=1',
  },
  {
    src: '/kiku-flowers-decor-minimal-contemporary.png',
    alt: 'Faux Kiku Flowers & Eucalyptus Arrangement',
    name: 'Faux Kiku Flowers & Eucalyptus Arrangement',
    href: 'https://www.amazon.com/Artificial-Faux-Kiku-Flower-Chrysanthemum-Arrangements-Centerpiece/dp/B0C9DKD79H?ie=UTF8&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=e23d98fd0333c628d2a3e17acd2d728a&language=en_US&ref_=as_li_ss_tl',
  },
  {
    src: '/tall-black-brass-vase-duo.png',
    alt: 'Set of Tall Single-Stem Vases',
    name: 'Tall Single-Stem Vase Set, 2pcs',
    href: 'https://www.amazon.com/Sziqiqi-Black-Single-Stem-Vase/dp/B0CH9F6ZWL/ref=cm_cr_arp_d_product_top?ie=UTF8&th=1',
  },
  {
    src: '/minimalist-accent-vase-trio.png',
    alt: 'Stone-Look Vase Trio',
    name: 'Stone-Look Vase Set, 3pcs',
    href: 'https://www.amazon.com/SincereLuxe-Aesthetic-Stone-Look-Minimalist-Decorative/dp/B0FKZHYLFM?ie=UTF8&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=b7a0d94092909c4b0fcb05dd1c28d2e9&language=en_US&ref_=as_li_ss_tl',
  },
  {
    src: '/contemporary-buffet-sideboard.png',
    alt: 'Accent Sideboard',
    name: 'Brown Buffet Cabinet',
    href: 'https://www.amazon.com/Sideboard-Cabinet-Storage-Adjustable-Entryway/dp/B0FLQD585M?pd_rd_w=ovWm9&content-id=amzn1.sym.781fe6e1-9487-4a74-b81e-5a879e5ec273%3Aamzn1.symc.c3d5766d-b606-46b8-ab07-1d9d1da0638a&pf_rd_p=781fe6e1-9487-4a74-b81e-5a879e5ec273&pf_rd_r=YQ1N4S9N25HQWF12JVPQ&pd_rd_wg=YzRKu&pd_rd_r=deaf5964-ce00-4e92-9260-9fe43956c526&pd_rd_i=B0FLQD585M&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=03bddadf28524a24af7c0c84288b997d&language=en_US&ref_=as_li_ss_tl',
  },
  {
    src: '/wall-art-panels-decor.png',
    alt: 'Framed Wall Art Panels',
    name: 'Framed Wall Art Panels',
    href: 'https://www.amazon.com/dp/B0GXJX8659?sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWwy&utm_medium=organic&content-id=amzn1.sym.953c7d66-4120-4d22-a777-f19dbfa69309&pf_rd_p=953c7d66-4120-4d22-a777-f19dbfa69309&pf_rd_r=XE940CH0M8EQRHDGJDBN&pd_rd_wg=gxLAM&pd_rd_w=goyTK&pd_rd_r=9771e01e-e8cf-490f-bbcd-906bdad40189&utm_source=Pinterest&ar_srct=C&creatorsDisableRedirect=true&ar_su=https%3A%2F%2Fa.co%2Fd%2F0eAA9RT1&ar_mt=EXACT_MATCH&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=08ae88f8522231646580a73ba7580647&language=en_US&ref_=as_li_ss_tl',
  },
  {
    src: '/art-deco-table-vase-decor.jpg',
    alt: 'Sculptural "Coral" Vase',
    name: "Sculptural 'Coral' Vase",
    href: 'https://www.amazon.com/Ceramic-Decoration-Sculpture-Bohemian-Bookshelf/dp/B0D2RH6M1Y?ie=UTF8&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=8ab6b6d5f949ef2fc958e9fba0b3fe8b&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/calla-lily-faux-flower-decor copy.png',
    alt: 'Lys Calla Flowers',
    name: 'Faux Calla Lilies',
    href: 'https://www.amazon.com/Amore-Florals-Artificial-Centerpieces-Arrangements/dp/B0FFSFJ665?_encoding=UTF8&pd_rd_w=eapQR&content-id=amzn1.sym.a6dce754-9901-41a6-a629-a32800521c61%3Aamzn1.symc.5a16118f-86f0-44cd-8e3e-6c5f82df43d0&pf_rd_p=a6dce754-9901-41a6-a629-a32800521c61&pf_rd_r=7X0BTRFJRPQG0FSC1RQJ&pd_rd_wg=F7iV2&pd_rd_r=7a70190d-afd9-45ae-9040-2a34cfe20b99&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=2bab9d674a1a8a41821f0c6029a891ae&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/modern-tv-stand.png',
    alt: 'Fluted TV Stand',
    name: 'Walker Edison TV Console',
    href: 'https://www.amazon.com/Walker-Edison-Walton-Modern-Fluted-Door/dp/B0C54FL3N3?pd_rd_w=g18vP&content-id=amzn1.sym.781fe6e1-9487-4a74-b81e-5a879e5ec273%3Aamzn1.symc.c3d5766d-b606-46b8-ab07-1d9d1da0638a&pf_rd_p=781fe6e1-9487-4a74-b81e-5a879e5ec273&pf_rd_r=0QJ0QGRTRA0N1ZNP0P65&pd_rd_wg=zkPrl&pd_rd_r=fac6ee3f-55b3-4d6f-895b-53b4b0f4a9cb&pd_rd_i=B0C54FL3N3&th=1&utm_source=Pinterest&utm_medium=organic&linkCode=ll2&tag=maisonpacem05-20&linkId=e07a53dd0a00e541c4dca96a350b7a6c&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/accent-wall-mirror-contemporary.png',
    alt: 'Accent Mirror',
    name: 'Gold Asymmetrical Mirror',
    href: 'https://www.amazon.com/Bathroom-Mirror-Over-Sink-Gold-Decor/dp/B0DX6JPJ9Z?ie=UTF8&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=7131849c29e1a8550b99099c79e5764d&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/wall-decor-contemporary.png',
    alt: 'Coral Wall Art',
    name: "Textured 'Coral' Wall Art",
    href: 'https://www.amazon.com/Creative-Co-Op-Handmade-White-Shaped/dp/B0B34KK89P?ie=UTF8&linkCode=ll2&tag=maisonpacem05-20&linkId=c1da028716b2f08da2ddcd8270e96234&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/end-table-decor-modern.png',
    alt: 'Fluted End Table',
    name: 'Fluted Side Table',
    href: 'https://www.amazon.com/MAHYIZYI-Fluted-Pedestal-Farmhouse-Walnut-2PCS/dp/B0GJS7KN8Y?ie=UTF8&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=38e3d6faa6006ebb59cac286a80832a2&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/coffee-table-living-room.png',
    alt: 'Fluted Coffee Table',
    name: 'Fluted Coffee Table',
    href: 'https://www.amazon.com/dp/B0GD1FNR1F?pd_rd_i=B0GD1FNR1F&pd_rd_w=N5GuP&content-id=amzn1.sym.3bc66c0a-cc61-4816-aa2d-e53327eaddb6&pf_rd_p=3bc66c0a-cc61-4816-aa2d-e53327eaddb6&pf_rd_r=SDKPV8DQT4XT7QM7TZ42&pd_rd_wg=ww9pj&pd_rd_r=46708b47-3aa6-49b1-8fb6-6da020881032&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=1e3ba0bf685a3d17ce79f3ceebbeb27f&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/clear-accent-decor-vases.png',
    alt: 'Bulb Vases',
    name: 'Bulb Vases',
    href: 'https://www.amazon.com/YANWE1-Flower-Bouquet-Flowers-Wedding/dp/B0FFMMCMRQ?content-id=amzn1.sym.8eb671a2-a903-4c3a-b962-ebb867a4f8f8%3Aamzn1.sym.8eb671a2-a903-4c3a-b962-ebb867a4f8f8&crid=LPBMNFG4SHX8&cv_ct_cx=small%2Bsquare%2Bclear%2Bvase&keywords=small%2Bsquare%2Bclear%2Bvase&pd_rd_i=B0FFMMCMRQ&pd_rd_r=9d4b051d-6a31-4bb3-b586-4a082c1e5991&pd_rd_w=5y385&pd_rd_wg=k8vTK&pf_rd_p=8eb671a2-a903-4c3a-b962-ebb867a4f8f8&pf_rd_r=ZV41NHNP2QGPVBGNGVN5&qid=1787692722&s=home-garden&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=small%2Bsquare%2Bclear%2Bvas%2Cgarden%2C143&sr=1-2-6024b2a3-78e4-4fed-8fed-e1613be3bcce-spons&aref=BibVZjJ7WK&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=6739064744ee2ec2b96a64d9b6f2e3fe&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/rattan-buffet-cabinets.png',
    alt: "'Kova' Rattan Sideboard Cabinets",
    name: "'Kova' Rattan Sideboard Cabinets",
    href: 'https://www.amazon.com/-/fr/Nathan-James-buffets-dentr%C3%A9e-Ch%C3%AAne/dp/B0BLG62LS5?th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=28a7692396efbc017170af9c2b2123cf&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/full-lenght-arched-mirror.png',
    alt: 'Full Length Arched Mirror',
    name: 'Full Length Arched Mirror',
    href: 'https://www.amazon.com/HARRITPURE-Arched-Length-Mirror-Mirrors/dp/B0D7CRPNHR?ie=UTF8&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=a3b8d025437382d095a8b24341321229&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/sherpa-accent-chairs-set.png',
    alt: 'Sherpa Accent Chairs, Set of 2',
    name: 'Sherpa Accent Chairs, Set of 2',
    href: 'https://www.amazon.com/dp/B09J4Q34QH?asc_item-id=amzn1.ideas.2C7HVIIV6SXN1&th=1&utm_source=Pinterest&utm_medium=organic&linkCode=ll2&tag=maisonpacem05-20&linkId=0a9c963195bf0e36a2254c738a1e769f&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/bathroom-modern-wood-tray.png',
    alt: 'Bathroom Tray',
    name: 'Bathroom Tray',
    href: 'https://www.amazon.com/Bathroom-Organizer-Decorative-Rectangular-Cosmetic/dp/B0BF3WT9HX?ie=UTF8&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=a04c9f0acf6ceef85381c53d635b3924&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/accent-ledge-shelve.png',
    alt: 'Scalloped Shelf Set, 2 pcs',
    name: 'Scalloped Shelf Set, 2 pcs',
    href: 'https://www.amazon.com/Kate-LaureL-Display-Scalloped-Floating/dp/B0DKG3CDDQ?th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=6684bfb677c0d1512b3d1abc3cfe9981&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/stone-tray-decor.png',
    alt: 'Travertine Tray',
    name: 'Travertine Tray',
    href: 'https://www.amazon.com/Koville-Travertine-Decorative-Countertop-Organizer/dp/B0C4KQF1V8?pd_rd_w=b7YaG&content-id=amzn1.sym.3d5af8a3-cce9-42ea-9ba5-183bb8c2673b&pf_rd_p=3d5af8a3-cce9-42ea-9ba5-183bb8c2673b&pf_rd_r=0BH2BDVFYFT77TBQBMRA&pd_rd_wg=9NZx4&pd_rd_r=c715515f-76b0-4eec-81fb-384afebd39f7&pd_rd_i=B0C4KQF1V8&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=4e99170fbafefefae8992bff520f85f5&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/faux-anthurium-flowers.png',
    alt: 'Faux Anthurium Flowers',
    name: 'Faux Anthurium Flowers',
    href: 'https://www.amazon.com/dp/B0G2X1ZHY3?pd_rd_i=B0G2X5VLWK&pd_rd_w=8gN92&content-id=amzn1.sym.17345c9b-ef8c-4a79-bcd9-8894b1e1e0ea&pf_rd_p=17345c9b-ef8c-4a79-bcd9-8894b1e1e0ea&pf_rd_r=M27A348178XVSSZ0T4NZ&pd_rd_wg=BxEe5&pd_rd_r=3a5ebed4-e5c4-450b-a95c-c3ac7478e179&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=f0a75956daa321bcdc5ac5163a71faa2&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/striped-bathroom-hand-towels.png',
    alt: 'Black & White Striped Hand Towels',
    name: 'Black & White Striped Hand Towels',
    href: 'https://www.amazon.com/Jacquotha-Striped-Bathroom-Vintage-Kitchen/dp/B0F2SGPR4X?crid=TN5900SEDDP2&dib=eyJ2IjoiMSJ9.aLZuYaQvg4hoALb8zgsftxpLegq4_slfp-d9igiGRd0L4U1vRXS_8oX9f_VLWQOoGEkdtvXkaEAIs-3_puAbScov7dh4CM7xy3q_v00QBqGsuQnI5ICnlWPyQwLKtuZs5UtuPZ5k4q_N09lLWyxo6O8o8KtrCMnewjudjK6oI8JIQTnj-_JPEJtcjbPuVRQuBsBPltPpYXqSP9bA01h8hwnWJcF0EIoYwYuXDuegkiTwOws3C0N8tT20kAEa-RfECiyxuMhUjxbxrb04ZuzrBh12uTlNo0SW1_aMtvl9R3Q.NB81l4W6rFKDW6mXixV7v08r8Iem8rMsx8mqsnshSlc&dib_tag=se&keywords=striped%2Btowels&qid=1788834685&s=home-garden&sprefix=striped%2Btowel%2Cgarden%2C154&sr=1-6&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=147cd8929993400012cdf3d3330eede8&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/scalloped-shower-curtain.png',
    alt: 'Scalloped Shower Curtain',
    name: 'Scalloped Shower Curtain',
    href: 'https://www.amazon.com/-/fr/gp/aw/d/B0FRSFVBFW?th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=d44dc1f6d9131139494400c68078a4d5&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/zebra-area-rug.png',
    alt: 'Brown & Cream Zebra Rug',
    name: 'Brown & Cream Zebra Rug',
    href: 'https://www.amazon.com/Vergin-Zebra-Wool-Kaaleen-Bhaiya/dp/B0D8Z24YP4?ie=UTF8&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=854d89cae6ba352004d31d7e3f83a135&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/portable-mini-accent-lamp.png',
    alt: 'Portable Table Lamp',
    name: 'Portable Table Lamp',
    href: 'https://www.amazon.com/KDG-Portables-Cordless-Rechargeable-Lighting/dp/B0DMV9V47L/ref=cm_cr_arp_d_product_top?ie=UTF8&th=1',
  },
  {
    src: '/chrome-wire-side-table.png',
    alt: 'Chrome Side Table',
    name: 'Chrome Side Table',
    href: 'https://www.amazon.com/KHOXRMW-Stainless-Bedroom-Space-Saving-Nightstand/dp/B0GYZQDT1F?ie=UTF8&linkCode=ll2&tag=maisonpacem05-20&linkId=df88dd469c25c77f63fcd3f9892d5121&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/contemporary-classy-vase.png',
    alt: 'Wabi-Sabi Vase',
    name: 'Wabi-Sabi Vase',
    href: 'https://www.amazon.com/dp/B0D6K6TZ5P?asc_item-id=amzn1.ideas.2YS61G3G1IE4H&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=e835d14cc6b2b7239e077a4bc5ddb35b&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/wide-belly-black-vase.png',
    alt: 'Black Round Vase',
    name: 'Black Round Vase',
    href: 'https://www.amazon.com/dp/B0H459SN17?asc_item-id=amzn1.ideas.2YS61G3G1IE4H&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=c05ee7e65e1b8fd947c01f6be19c1802&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/small-sculptural-black-vase.png',
    alt: 'Small Black Vase',
    name: 'Small Black Vase',
    href: 'https://www.amazon.com/Organic-Decorative-Entryway-Dresser-OOSTONEE/dp/B0GFVWGTFN?ie=UTF8&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=eb64feaea665987ad50480986a53f748&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/colored-glass-two-toned-vase.png',
    alt: 'Reversible Smoky Vase',
    name: 'Reversible Smoky Vase',
    href: 'https://www.amazon.com/dp/B0BNJH58XJ?asc_item-id=amzn1.ideas.2YS61G3G1IE4H&linkCode=ll2&tag=maisonpacem05-20&linkId=32764a1dcadaf633eac0d0c8b8ad4ef9&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/patterned-black-glass-vase.png',
    alt: 'Patterned Black Vase',
    name: 'Patterned Black Vase',
    href: 'https://www.amazon.com/dp/B0FDQQVW1F?asc_item-id=amzn1.ideas.2YS61G3G1IE4H&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=51fc262dbd60fe461551a492f268d00a&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/patterned-white-vase.png',
    alt: 'Patterned White Vase',
    name: 'Patterned White Vase',
    href: 'https://www.amazon.com/dp/B0FDQNFCPZ?asc_item-id=amzn1.ideas.2YS61G3G1IE4H&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=6363d3eb56f402b3ac84b619bde8c9ff&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/cream-textured-vase.png',
    alt: "'Bubble' Sculptural Vase",
    name: "'Bubble' Sculptural Vase",
    href: 'https://www.amazon.com/dp/B0BN2VPNLJ?asc_item-id=amzn1.ideas.2YS61G3G1IE4H&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=a9aaa64b8c6f1ec7e350153e3dc53758&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/clear-glass-ribbed-flower-vase.png',
    alt: 'Ribbed Glass Vase',
    name: 'Ribbed Glass Vase',
    href: 'https://www.amazon.com/dp/B0BL3HHP2D?asc_item-id=amzn1.ideas.2YS61G3G1IE4H&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=268393cf1dd40e3a60ace1a5c18233d6&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/fall-faux-dried-hydrangea-flowers.png',
    alt: 'Faux Hydrangea Flowers',
    name: 'Faux Hydrangea Flowers',
    href: 'https://www.amazon.com/dp/B0FKSGV2NJ?asc_item-id=amzn1.ideas.L6A30862KGUZ&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=53be8862479228a876547bbf71307813&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/faux-pompom-flowers.png',
    alt: "Faux 'Pompom' Flowers",
    name: "Faux 'Pompom' Flowers",
    href: 'https://www.amazon.com/dp/B0F37SWKP9?asc_item-id=amzn1.ideas.L6A30862KGUZ&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=a3fc1fe23a67df729816d2df25b2995b&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/faux-berry-stems.png',
    alt: 'Faux Berry Stems',
    name: 'Faux Berry Stems',
    href: 'https://www.amazon.com/dp/B0GT4QFR9Z?asc_item-id=amzn1.ideas.L6A30862KGUZ&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=68c9683081b32bb30450994d59685324&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/skimmia-stems.png',
    alt: 'Faux Skimmia Stems',
    name: 'Faux Skimmia Stems',
    href: 'https://www.amazon.com/dp/B0H69WWBMV?asc_item-id=amzn1.ideas.L6A30862KGUZ&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=39f0169e286ef388c7fbd01ac9fddb40&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/faux-fall-leaves-arrangement.png',
    alt: 'Faux Lingxiao Leaves',
    name: 'Faux Lingxiao Leaves',
    href: 'https://www.amazon.com/dp/B0F8425T5F?asc_item-id=amzn1.ideas.L6A30862KGUZ&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=eec01b1537b4930ec9581a1918f9b2ab&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/faux-lotus-pods-contemporary-arrangement.png',
    alt: 'Dried Lotus Pods',
    name: 'Dried Lotus Pods',
    href: 'https://www.amazon.com/dp/B0F227SQC3?asc_item-id=amzn1.ideas.L6A30862KGUZ&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=bff8c809d1c08fe14b9dbf77d9e98538&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/faux-tree-vines.png',
    alt: 'Faux Tree Vines',
    name: 'Faux Tree Vines',
    href: 'https://www.amazon.com/dp/B0C3H8DBSR?asc_item-id=amzn1.ideas.L6A30862KGUZ&linkCode=ll2&tag=maisonpacem05-20&linkId=066f95adb2764656b8525d65e0395479&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/brown-stone-tray.png',
    alt: 'Brown Stone Tray',
    name: 'Brown Stone Tray',
    href: 'https://www.amazon.com/dp/B0DN68LVC7?asc_item-id=amzn1.ideas.1CFNA9IY3UNFO&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=2c05d51cf4919bf1ba8d0982eee3b39d&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/calacatta-stone-tray.png',
    alt: 'Calacatta Stone Tray',
    name: 'Calacatta Stone Tray',
    href: 'https://www.amazon.com/dp/B0GKDRLPJV?asc_item-id=amzn1.ideas.1CFNA9IY3UNFO&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=b841eb8a628d9a22db425ff24003351a&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/wall-art-dark.png',
    alt: 'Framed Canvas',
    name: 'Framed Canvas',
    href: 'https://www.amazon.com/dp/B0GVYG3N21?asc_item-id=amzn1.ideas.11BF52TTWY2KF&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=e3a36090a9e8d1fb91cb368b765b8a4a&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/irregular-wall-mirror.png',
    alt: 'Irregular Mirror',
    name: 'Irregular Mirror',
    href: 'https://www.amazon.com/dp/B0B2QNRJPR?asc_item-id=amzn1.ideas.2M0AYK0CBQ0RR&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=56291070d9a708ad8db831767919016b&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/irregular-organic-wall-mirror.png',
    alt: 'Organic Wall Mirror',
    name: 'Organic Wall Mirror',
    href: 'https://www.amazon.com/dp/B0FXMCNQ12?asc_item-id=amzn1.ideas.2M0AYK0CBQ0RR&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=695251c8c4f3790c6853ee2d3fd4684f&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/designer-side-table.png',
    alt: 'Accent Table',
    name: 'Accent Table',
    href: 'https://www.amazon.com/dp/B0CRZV43Y4?asc_item-id=amzn1.ideas.8C1ZOL41KUO5&linkCode=ll2&tag=maisonpacem05-20&linkId=0dcbd7edd490716624f818ebf03110ff&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/small-end-table.png',
    alt: 'Martini Table',
    name: 'Martini Table',
    href: 'https://www.amazon.com/dp/B0GGGWF6X9?asc_item-id=amzn1.ideas.8C1ZOL41KUO5&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=faf5730893cff1d90fb4893f5ca2d7d6&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/deep-pink-faux-athuriums.png',
    alt: 'Faux Pink Anthuriums',
    name: 'Faux Pink Anthuriums',
    href: 'https://www.amazon.com/forestmistry-Artificial-Anthurium-Centerpieces-Christmas/dp/B0G2X1ZHY3?ie=UTF8&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=d5aac737ee9efe9827be05c77527da49&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/fluted-sideboard-modern.png',
    alt: 'Fluted Sideboard Cabinet',
    name: 'Fluted Sideboard Cabinet',
    href: 'https://www.amazon.com/Sideboard-Cabinet-Credenza-Marble-Top-Entryway/dp/B0G4PRVJ5M?ie=UTF8&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=912017f0c0032cf6aa9b55f40bafde40&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/simple-modern-coffee-table.png',
    alt: 'Round Coffee Table',
    name: 'Round Coffee Table',
    href: 'https://www.amazon.com/dp/B0DK1RHN36?asc_item-id=amzn1.ideas.384KHFZNX59XJ&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=eeda6980837de5f3e6655fba820b6699&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/chrome-table-lamp.png',
    alt: 'Chrome Table Lamp',
    name: 'Chrome Table Lamp',
    href: 'https://www.amazon.com/Brightech-Venus-Globe-Table-Lamp/dp/B0F1DN6HTQ?ie=UTF8&linkCode=ll2&tag=maisonpacem05-20&linkId=bb36df5c8955f4842a4c7d28282f8405&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/white-faux-calla-lilies.png',
    alt: 'Faux White Calla Lilies',
    name: 'Faux White Calla Lilies',
    href: 'https://www.amazon.com/dp/B0HBPNJ532?asc_item-id=amzn1.ideas.L6A30862KGUZ&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=bacece6b7d1efde4acca2f613766c965&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/faux-white-orchids.png',
    alt: 'Faux White Orchids',
    name: 'Faux White Orchids',
    href: 'https://www.amazon.com/Artificial-Phalaenopsis-Arrangement-Centerpiece-Decorations/dp/B0BLK7TMCY?crid=RYU4MWFQVL6M&dib=eyJ2IjoiMSJ9.7t2E7nHbH2QIan-WNNd52V2eBmiUiX_mnN55Hw5ouOipXjG9Ta7ShcBdM5gvPqITUbm63bvNB8xEOQiC76OIiQO_-kOOd9n7mjxo4k80HM-xnfVmc3dbjoG-ji1LCQMMCbbTKI1s6qcNAT1BABA-tLLo65XsME-hGQqtonZXyCHjk-9bPfS3K0TczrEAUk2LBRe7syoHTJPqnK5gXl_1341xCtksoEzkPZUzJZSzqOpO7NgNKe3HRh52DlQiCHW_ITaM6ky-SdNxxii-dhP3Xmb57D2WbnVMqw-InRbrKk4.qE3j89JHhW4QbhQWxcA68_ecH_Sm306nGNIqpytqDjE&dib_tag=se&keywords=white+fake+orchids&qid=1792974191&sprefix=white+fake+orchi%2Caps%2C198&sr=8-12-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1&linkCode=ll2&tag=maisonpacem05-20&linkId=37fee171c177442345e81b76bcf8860d&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/faux-pink-orchids.png',
    alt: 'Faux Pink Orchids',
    name: 'Faux Pink Orchids',
    href: 'https://www.amazon.com/Artificial-Phalaenopsis-Arrangement-Centerpiece-Decorations/dp/B0CC9Z9MKB?crid=RYU4MWFQVL6M&dib=eyJ2IjoiMSJ9.7t2E7nHbH2QIan-WNNd52V2eBmiUiX_mnN55Hw5ouOipXjG9Ta7ShcBdM5gvPqITUbm63bvNB8xEOQiC76OIiQO_-kOOd9n7mjxo4k80HM-xnfVmc3dbjoG-ji1LCQMMCbbTKI1s6qcNAT1BABA-tLLo65XsME-hGQqtonZXyCHjk-9bPfS3K0TczrEAUk2LBRe7syoHTJPqnK5gXl_1341xCtksoEzkPZUzJZSzqOpO7NgNKe3HRh52DlQiCHW_ITaM6ky-SdNxxii-dhP3Xmb57D2WbnVMqw-InRbrKk4.qE3j89JHhW4QbhQWxcA68_ecH_Sm306nGNIqpytqDjE&dib_tag=se&keywords=white%2Bfake%2Borchids&qid=1792974191&sprefix=white%2Bfake%2Borchi%2Caps%2C198&sr=8-12-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&th=1&linkCode=ll2&tag=maisonpacem05-20&linkId=2d8260f0b3c3e183fd48215c92fb9a9c&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
  {
    src: '/brown-floral-pillow-cover.png',
    alt: 'Brown Pillow Cover',
    name: 'Brown Pillow Cover',
    href: 'https://www.amazon.com/Alerfa-Floral-Pillow-Decorative-Bedroom/dp/B0F9SRNFT4?content-id=amzn1.sym.65ab1892-b11f-49dc-9c2f-f8ae227fc274%3Aamzn1.sym.65ab1892-b11f-49dc-9c2f-f8ae227fc274&crid=33ZGF97RIERBJ&cv_ct_cx=classy+throw+pillows&keywords=classy+throw+pillows&pd_rd_i=B0F9SRNFT4&pd_rd_r=6189e92b-a437-47ad-8622-dc71dc502ffe&pd_rd_w=2kXlU&pd_rd_wg=jmEyx&pf_rd_p=65ab1892-b11f-49dc-9c2f-f8ae227fc274&pf_rd_r=5J0GM8B7AREW5X9ST33W&qid=1792975384&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=classy+throw+pillow%2Caps%2C202&sr=1-1-e169343e-09af-4d41-85b1-8335fe8f32d0-spons&aref=u4E1EIvIuT&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1&linkCode=ll2&tag=maisonpacem05-20&linkId=0017a17566800cdf8a272032b726c825&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
  },
];

export function CatalogPage() {
  React.useEffect(() => {
    document.title = 'Catalog | Maison Pācem';
  }, []);

  const [sortOrder, setSortOrder] = useState<'recent' | 'oldest'>('recent');
  const [activeCategory, setActiveCategory] = useState<'all' | 'vases'>('all');

  const vaseProducts = useMemo(
    () => PRODUCTS.filter((p) => /vase/i.test(p.alt) || /vase/i.test(p.name)),
    []
  );

  const orderedProducts = useMemo(() => {
    const base = activeCategory === 'vases' ? vaseProducts : PRODUCTS;
    if (sortOrder === 'oldest') {
      return base;
    }
    return [...base].reverse();
  }, [sortOrder, activeCategory, vaseProducts]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <div className="flex items-center justify-center">
              <img
                src="/pacempp.jpg"
                alt="Maison Pācem"
                className="h-8 w-auto"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section - Full Width */}
        <div className="mb-8">
          <h3 className="text-sm font-bold mb-4 tracking-wide">WELCOME</h3>
          <p className="text-xs leading-relaxed max-w-4xl">
            Welcome ladies. Here is the catalog I've been raving about on my pinterest pins... and tiktoks. I thought browsing a page like this would be better and just easier than scrolling through my pins, not being sure which one of the items in the picture would be linked this time. As you know, everything here is from Amazon. <strong>Nothing below a 4-star rating.</strong> Happy shopping, happy decorating. <em>- Sayce</em>
          </p>
          <p className="text-xs italic text-gray-500 mt-2">
            *Commissions may be earned.
          </p>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Left Sidebar */}
          <div className="hidden md:block w-64 pr-8">
            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-sm font-medium mb-4">CATÉGORIES</h3>
              <div className="space-y-2 text-sm">
                <button
                  type="button"
                  onClick={() => setActiveCategory('all')}
                  className="block bg-transparent border-0 rounded-none p-0 text-left text-black font-normal"
                >
                  "LA SÉLECTION VARIÉE"
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCategory('vases')}
                  className="block bg-transparent border-0 rounded-none p-0 text-left text-black font-normal"
                >
                  Vases
                </button>
              </div>
            </div>

          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort Options */}
            <div className="flex justify-end mb-8">
              <div className="text-sm">
                <span className="mr-4">TRIER</span>
                <select
                  className="border-none bg-transparent text-sm"
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as 'recent' | 'oldest')}
                >
                  <option value="recent">Most Recent</option>
                  <option value="oldest">Oldest</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {orderedProducts.map((product) => (
                <div key={product.src} className="group cursor-pointer flex flex-col items-center text-center sm:items-start sm:text-left">
                  <div className="aspect-[4/5] bg-white overflow-hidden mb-3">
                    <img
                      src={product.src}
                      alt={product.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-xs text-black mt-1 mb-2">{product.name}</p>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-[10px] text-gray-600 underline underline-offset-2 transition-colors hover:text-gray-500"
                  >
                    Amazon Link
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Disclaimer */}
        <div className="mt-16 pb-8">
          <p className="text-xs italic text-gray-500">
            Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates.
          </p>
        </div>
      </div>
    </div>
  );
}
