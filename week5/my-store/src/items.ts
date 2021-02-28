export interface Item{
  link:string,
  name:string,
  description:string,
  images: string[],
  rating: number,
  likes?:number;
}
export  interface  Category{
  name:string;
  items: Item[]
}
export const categories:Category[] = [
  {name:'Funny things', items:[{link:"https://www.amazon.com/Bring-Me-Horizon-Dynamite-Standard/dp/B015JK5WEE/ref=sr_1_12?crid=ZF8FKI0JZ8TV&dchild=1&keywords=poster+bring+me+the+horizon&qid=1614019351&sprefix=poster+bring%2Caps%2C320&sr=8-12",
      name:"Bring me the the Horizon poster",
      images:["https://images-na.ssl-images-amazon.com/images/I/41BXYbH1FpL._AC_.jpg","https://images-na.ssl-images-amazon.com/images/I/71VMPzAE2WL._AC_SL1500_.jpg"],
      description:"Image as shown printed on sheer soft fabric, like a large flag",
      rating:3.9},

      {link:"https://www.amazon.com/SINOGEM-Shark-Tail-Blanket-Sleeping/dp/B06WGV4DTY/ref=bmx_4?pd_rd_w=W3E50&pf_rd_p=f71775c5-9fe6-4e06-a8bc-a95de49acaab&pf_rd_r=AW5BEA1HQK7K2QFQRBAR&pd_rd_r=8e8bb7c5-046e-4c18-94ac-904c1593c45e&pd_rd_wg=ug1TT&pd_rd_i=B06WGV4DTY&psc=1",
        name:"Shark",
        images:["https://images-na.ssl-images-amazon.com/images/I/61YJUYyOMXL._AC_SL1200_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/61tKV09aWZL._AC_SL1200_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71-KBP2sjfL._AC_SL1200_.jpg"],
        description:"Unique shark shape design blanket,best present for kids,you will never need to worry that your kid will kicking the blanket and catch a cold",
        rating:5},

      {link:"https://www.amazon.com/Card-Game-Cards-Basic-Pack%EF%BC%88Red%EF%BC%89/dp/B08FFY9BLN/ref=sr_1_4?dchild=1&keywords=uno&qid=1614020879&sr=8-4",
        name:"UNO",
        images:["https://images-na.ssl-images-amazon.com/images/I/41iRhR04chL._AC_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71KMbcz-LhL._AC_SL1000_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/51ZKnPq-I9L._AC_.jpg"],
        description:"UNO The classic card game of matching colors and numbers",
        rating:4.1},

      {link:"https://www.amazon.com/Quick-Easy-Way-Effective-Speaking/dp/0671724002/ref=sr_1_4?crid=2QL4CZFYYUAUL&dchild=1&keywords=dail+carnegie&qid=1614020991&sprefix=dail+car%2Caps%2C323&sr=8-4",
        name:"The Quick Way to Effective Speaking",
        images:["https://images-na.ssl-images-amazon.com/images/I/51VctYIi6HL.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/41hhuHegl+L.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71Kx5BQ1LyL.jpg"],
        description:"With this book, the bestselling author  aims to demonstrate that public speaking is a skill which anyone can acquire and develop.",
        rating:5.6},

      {link:"https://www.amazon.com/Quantum-Physics-Babies-Baby-University/dp/1492656224/ref=sr_1_11?crid=378RP3CW5O8EW&dchild=1&keywords=html+for+babies&qid=1614021473&sprefix=html+for%2Caps%2C371&sr=8-11",
        name:"Quantum Physics for Babies",
        images:["https://images-na.ssl-images-amazon.com/images/I/812IbaQ4cpL.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/614X615tbjL.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/61BfTjmFxoL.jpg"],
        description:"The Perfect Physics Gift and STEM Learning Book for Babies from the #1 Science Author for Kids (Baby University)",
        rating:999},]},
  {name:'Games',items:[{link:"https://www.amazon.com/Aurora-World-Pompom-Penguin-White/dp/B00GS228DG/ref=sr_1_7?dchild=1&keywords=penguin&qid=1614021667&sr=8-7",
      name:"Pompom Penguin",
      images:["https://images-na.ssl-images-amazon.com/images/I/71nE94ukV3L._AC_SL1500_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/81%2BkpTPWDBL._AC_SL1500_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/81Rt3iBuP9L._AC_SL1500_.jpg"],
      description:"Amazing mini-size, his tiny little shape and form makes sure he offers a friendly little companion to help really build up your growing collection.",
      rating:5},

      {link:"https://www.amazon.com/Nokia-Unlocked-Smartphone-Fingerprint-Assistant/dp/B08JRF9L15/ref=sr_1_4?dchild=1&keywords=nokia+old&qid=1614021949&sr=8-4",
        name:"Nokia 2.4 Android",
        images:["https://images-na.ssl-images-amazon.com/images/I/61sLvszoETL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71d0f93y02L._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/61lziaZsGGL._AC_SL1500_.jpg"],
        description:"Capture detailed shots on the Nokia 2.4 Android Smartphone after dark with its Night Mode advanced image fusion and exposure stacking.",
        rating:2.7},

      {link:"https://www.amazon.com/STATISTICS-COLLEGE-STUDENTS-RESEARCHERS-SECOND/dp/B08RQZJ5GG/ref=sr_1_15?crid=FQRLUANBAE3P&dchild=1&keywords=statistics&qid=1614022121&sprefix=statisti%2Caps%2C363&sr=8-15",
        name:"STATISTICS FOR STUDENTS",
        images:["https://images-na.ssl-images-amazon.com/images/I/71puiLhGMmL.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/71nDrQowJGL.jpg"],
        description:"This book was written by a professor of Psychology who taught advanced statistics. It teaches the concepts of Statistics.",
        rating:-5},

      {link:"https://www.amazon.com/LKXHarleya-Classic-Michelangelo-Sculpture-Figurine/dp/B07F867BSM/ref=sr_1_2?crid=344HSRJSSGHNZ&dchild=1&keywords=sculpture&qid=1614022494&sprefix=sculpture%2Caps%2C360&sr=8-2",
        name:"Michelangelo Statue",
        images:["https://images-na.ssl-images-amazon.com/images/I/61k--8R0jwL._AC_SL1200_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/61bEHLzAKTL._AC_SL1200_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/61S2TxfSQIL._AC_SL1200_.jpg"],
        description:"Made of the high-quality resin, the David Sculpture Figurine is durable and fadeless.",
        rating:666},

      {link:"https://www.amazon.com/Sullivans-Artificial-Saguaro-Distressed-DOT124/dp/B07N2YT2YF/ref=sr_1_4?dchild=1&keywords=cactus&qid=1614022578&sr=8-4",
        name:"Artificial Succulent Plant",
        images:["https://images-na.ssl-images-amazon.com/images/I/71sN3QQg3GL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/81JQkz0NJdL._AC_SL1500_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/81-%2BlZwDBuL._AC_SL1500_.jpg"],
        description:"Natural decor with a realistic feel, great for use in office, home, balcony and with other furniture and room decorations",
        rating:5.7}]},
  {name:'Beauty',items:[
      {link:'https://www.amazon.com/Maybelline-Volumizing-Buildable-Lengthening-Multiplying/dp/B08H4FSGDW/ref=sr_1_2?dchild=1&fst=as%3Aoff&pf_rd_i=16225006011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=fd971cf1-cdbc-4301-8c91-0a56b1c1e13f&pf_rd_r=S61ZBA30QSKAZWY3AS9P&pf_rd_s=merchandised-search-4&pf_rd_t=101&qid=1614472012&rnid=16225006011&s=beauty-intl-ship&sr=1-2',
      images: ['https://images-na.ssl-images-amazon.com/images/I/71aPOVjcHpL._SL1500_.jpg'],
      rating: 10,
      description: 'Sky high lash impact from every angle, full volume meets limitless length',
      name: 'Maybelline Mascara Makeup'},
      {link:'https://www.amazon.com/NYX-PROFESSIONAL-MAKEUP-Waterproof-Eyeliner/dp/B074Y8LM6T/ref=sr_1_4?dchild=1&fst=as%3Aoff&pf_rd_i=16225006011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=fd971cf1-cdbc-4301-8c91-0a56b1c1e13f&pf_rd_r=S61ZBA30QSKAZWY3AS9P&pf_rd_s=merchandised-search-4&pf_rd_t=101&qid=1614472012&rnid=16225006011&s=beauty-intl-ship&sr=1-4',
      images: ['https://images-na.ssl-images-amazon.com/images/I/51chGF41-DL._SL1000_.jpg'],
      name: "Epic Ink Liner",rating: 8,description: 'WATERPROOF LIQUID EYELINER: Get the perfect long-lasting cat eye look with NYX Professional makeup Epic Ink eyeliner.'}
    ,
      {link: 'https://www.amazon.com/Airspun-Translucent-Setting-Foundation-Lightweight/dp/B000BNG4VU/ref=sr_1_9?dchild=1&fst=as%3Aoff&pf_rd_i=16225006011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=fd971cf1-cdbc-4301-8c91-0a56b1c1e13f&pf_rd_r=S61ZBA30QSKAZWY3AS9P&pf_rd_s=merchandised-search-4&pf_rd_t=101&qid=1614472027&rnid=16225006011&s=beauty-intl-ship&sr=1-9',
      description: 'Flawless finish: Get the flawless finish you want with the help of Airspun loose face powder.',
      rating: 3,
      name: 'Loose Face Powder',
      images: ['https://images-na.ssl-images-amazon.com/images/I/71le2ZYj97L._SL1250_.jpg']},
      {link: 'https://www.amazon.com/Honest-Beauty-Extreme-Length-Mascara/dp/B07F462B2D/ref=sr_1_14?dchild=1&fst=as%3Aoff&pf_rd_i=16225006011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=fd971cf1-cdbc-4301-8c91-0a56b1c1e13f&pf_rd_r=S61ZBA30QSKAZWY3AS9P&pf_rd_s=merchandised-search-4&pf_rd_t=101&qid=1614472027&rnid=16225006011&s=beauty-intl-ship&sr=1-14',
      name: 'Extreme Length Mascara',description: '2-in-1 primer and mascara works together for lush length, volume and definition',
      rating: 6,images: ['https://images-na.ssl-images-amazon.com/images/I/61RdijMJHEL._SL1500_.jpg']}
      ]},
  {name:'Sport',items:[
      {name: 'Loop Exercise Bands',link: 'https://www.amazon.com/Fit-Simplify-Resistance-Exercise-Instruction/dp/B01AVDVHTI/ref=sr_1_1?dchild=1&fst=as%3Aoff&pf_rd_i=16225014011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=a3460e00-9eac-4cab-9814-093998a3f6d8&pf_rd_r=1SJ7VDW6M176TPBKJS5D&pf_rd_s=merchandised-search-4&pf_rd_t=101&qid=1614472446&rnid=16225014011&s=sporting-goods&sr=1-1',
      rating: -100, description: 'This resistance band set can be integrated seamlessly with various popular workout programs.',
      images: ['https://images-na.ssl-images-amazon.com/images/I/81ARh719W9L._AC_SL1500_.jpg']},
      {name:'Sleep Support Brace',link: 'https://www.amazon.com/Night-Wrist-Sleep-Support-Brace/dp/B074MKSSHK/ref=sr_1_2?dchild=1&fst=as%3Aoff&pf_rd_i=16225014011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=a3460e00-9eac-4cab-9814-093998a3f6d8&pf_rd_r=1SJ7VDW6M176TPBKJS5D&pf_rd_s=merchandised-search-4&pf_rd_t=101&qid=1614472446&rnid=16225014011&s=sporting-goods&sr=1-2',
        rating: 7,images: ['https://images-na.ssl-images-amazon.com/images/I/81quQyX2X7L._AC_SL1500_.jpg'],
        description: 'ULTIMATE COMFORT AND SUPPORT: The ComfyBrace hand splint was made for your convenience. '},
      {name:'Exercise Bands Fitness Bands',
        link: 'https://www.amazon.com/Resistance-Exercise-Strength-Beginner-Professional/dp/B07TZPVXMH/ref=sr_1_3?dchild=1&fst=as%3Aoff&pf_rd_i=16225014011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=a3460e00-9eac-4cab-9814-093998a3f6d8&pf_rd_r=1SJ7VDW6M176TPBKJS5D&pf_rd_s=merchandised-search-4&pf_rd_t=101&qid=1614472446&rnid=16225014011&s=sporting-goods&sr=1-3',rating: 7,
        images: ['https://images-na.ssl-images-amazon.com/images/I/81IHJwGQ7wL._AC_SL1500_.jpg'],
        description: 'Extra stability – If you’re looking for a glute band that won’t roll up or slide off during your workouts'}

    ]}

]
for(let i = 0 ; i < categories.length;i++){
  let cat = categories[i];
  for(let i = 0 ; i < cat.items.length;i++){
    cat.items[i].likes=0;
  }
}
