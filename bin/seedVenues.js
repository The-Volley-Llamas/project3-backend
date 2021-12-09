const mongoose = require("mongoose");
require("dotenv/config");
const MONGODB = process.env.MONGODB_URI;
const Venue = require("../models/Venue.model");

// connect to the database
const seedVenues = async () => {
  mongoose
    .connect(MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((db) => console.log("Connected to the database succesfully"))
    .catch((err) => console.log("Connection failed"));
  //seeding function
  try {
    const allVenues = [
      {
        name: "La Satalia", //FOOTBALL 1
        description: "Artificial surface",
        location: {
          type: { type: "Carrer de Margarit 58, 08004", default: "Point" },
          coordinates: [41.37082136727589, 2.155990366462568],
        },
        rating: 4.5,
        image: {
          type: "https://lh3.googleusercontent.com/proxy/RtIvYzyAhS6staD8A8omCf8TCXGPU7xJp-OxOQlvcCXP9bKljvFRYrC4VKits23OdgmtqWIAFgZXoSAD_SbC5taceH2aASwAq2BBOEhlQO-_DZarxsYDlycNiST9",
        },
      },
      {
        name: "Club de Fútbol La Catalana", //FOOTBALL 2
        description: "Natural grass",
        location: {
          type: { type: "Carrer del Dr.Aiguader 58, 08003", default: "Point" },
          coordinates: [41.38320706898188, 2.1908772640180505],
        },
        rating: 4.1,
        image: {
          type: "https://www.barcelonaaldia.com/wp-content/uploads/2020/12/baro_viver_campo.jpg",
        },
      },
      {
        name: "Agapito Fernandez", //FOOTBALL 3
        description: "Artificial surface",
        location: {
          type: { type: "Avenida del Litoral 85, 08005", default: "Point" },
          coordinates: [41.40209353993374, 2.2135064967009854],
        },
        rating: 5.0,
        image: {
          type: "https://lh5.googleusercontent.com/p/AF1QipP-_4ygOU_oQWhN6UE0pzk8gYQQD7SI-fMq-dHm=w1080-k-no",
        },
      },
      {
        name: "Cancha de Baloncesto Parc del Clot", //BASKET 1
        description: "Concrete",
        location: {
          type: {
            type: "Carrer dels Escultors Claperós 55, 08018",
            default: "Point",
          },
          coordinates: [41.408267122900384, 2.188422292880195],
        },
        rating: 4.2,
        image: {
          type: "https://cbgrupbarna.com/wp-content/uploads/2018/03/GB.17.jpg",
        },
      },
      {
        name: "Cancha de Baloncesto Parc de la Barceloneta", //BASKET 2
        description: "Concrete",
        location: {
          type: { type: "Carrer del Gas 5, 08003", default: "Point" },
          coordinates: [41.38264097690495, 2.19247812651231],
        },
        rating: 5.0,
        image: {
          type: "https://www.courtsoftheworld.com/upload/courts/21255/0/COTW-Parc-de-la-Baceloneta-1378154122.jpg",
        },
      },
      {
        name: "Cancha de Baloncesto Parc del Poblenou", //BASKET 3
        description: "Concrete",
        location: {
          type: { type: "Parc del Poblenou, 08005", default: "Point" },
          coordinates: [41.39562969929035, 2.206054629549372],
        },
        rating: 4.4,
        image: {
          type: "https://media-edg.barcelona.cat/wp-content/uploads/2021/05/11145441/2021-05-11-14_53_18-Window.png",
        },
      },
      {
        name: "Cancha de Baloncesto Parc del Poblenou", //BASKET 3
        description: "Concrete",
        location: {
          type: { type: "Parc del Poblenou, 08005", default: "Point" },
          coordinates: [41.39562969929035, 2.206054629549372],
        },
        rating: 4.4,
        image: {
          type: "https://media-edg.barcelona.cat/wp-content/uploads/2021/05/11145441/2021-05-11-14_53_18-Window.png",
        },
      },
      {
        name: "CV Barcelona", //VOLLEY 1
        description: "Indoor",
        location: {
          type: { type: "Avenida de l'Estadi 12, 08038", default: "Point" },
          coordinates: [41.36626935069661, 2.148427240712645],
        },
        rating: 4.3,
        image: {
          type: "https://www.fcbarcelona.com/fcbarcelona/photo/2018/06/11/cb1c2a86-843f-41d5-92e7-581e4236f08b/VO180122A46254.jpg",
        },
      },
      {
        name: "Multiverse BeachVolley", //VOLLEY 2
        description: "Sand",
        location: {
          type: { type: "Playa del Bogatell 08038", default: "Point" },
          coordinates: [41.393519709983515, 2.2077125364128025],
        },
        rating: 4.4,
        image: {
          type: "https://storage.googleapis.com/download/storage/v1/b/usc-pro-uscweb-live-media/o/de-live%2FvenueHome_1024x576_IMG-20210227-WA0019_1618478031850123_admin.jpeg?alt=media",
        },
      },
      {
        name: "Club Voleibol Vall d'Hebron", //VOLLEY 3
        description: "Indoor",
        location: {
          type: {
            type: "Passeig de la Vall d'Hebron 166, 08035",
            default: "Point",
          },
          coordinates: [41.42821148270863, 2.146658079339903],
        },
        rating: 4.2,
        image: {
          type: "https://lh3.googleusercontent.com/proxy/XNVLLANCyvVe2XcdPoSfU96NSk2mdoiv0e_mcBehESl6t8Twag68otQlGbYKSVHlCI8frh4RxeA-38ORpLV59BiGos5JFFz0AxzD9x_ShKxExpFGMG1TJ-Qz",
        },
      },
      {
        name: "David Lloyd Club Turó", //TENNIS 1
        description: "Clay",
        location: {
          type: {
            type: "Avenida Diagonal 673, 08028",
            default: "Point",
          },
          coordinates: [41.38373008841564, 2.1097299174285733],
        },
        rating: 4.2,
        image: {
          type: "https://www.davidlloyd.co.uk/cms/images/softwire-david-lloyd/image/upload/f_auto/v1/Clubs/Turo/eovzh2lqtyuvbziflyye.jpg",
        },
      },
      {
        name: "Real Sociedad de Tenis Pompeya", //TENNIS 2
        description: "Clay",
        location: {
          type: {
            type: "Carrer de la Foixarda 2, 08038",
            default: "Point",
          },
          coordinates: [41.36905860858462, 2.1486446549786558],
        },
        rating: 4.0,
        image: {
          type: "https://thetennistourist.com/wp-content/uploads/2014/10/P1030376.jpg",
        },
      },
      {
        name: "Club Tennis de la Salut", //TENNIS 3
        description: "Clay",
        location: {
          type: {
            type: "Carrer de la Mare de Déu de la Salut 75, 08024",
            default: "Point",
          },
          coordinates: [41.41369927016768, 2.160276193605914],
        },
        rating: 4.4,
        image: {
          type: "https://lh3.googleusercontent.com/proxy/olCo2IQT-GlLuXCvtRSReujzSSIbPoF8AWLt_GBnx-DhOdvohTCp8y3srDhFQyynjlWmHoHsl1MGUB-1s8WIWfEkT0trDAEMC-byP9SVsbnMG1LkqK-jO0wcvbZapbT-uhLe",
        },
      },
      {
        name: "Club Ariel", //TABLE-TENNIS 1
        description: "Indoor",
        location: {
          type: {
            type: "Carrer de Maignon 16, 08024",
            default: "Point",
          },
          coordinates: [41.40899972561257, 2.156141978984971],
        },
        rating: 4.9,
        image: {
          type: "https://res.cloudinary.com/anybuddy/image/upload/w_1120,h_560,c_fill/v1635509626/club-ariel.jpg",
        },
      },
      {
        name: "Club Tennis Taula Barcelona", //TABLE-TENNIS 2
        description: "Indoor",
        location: {
          type: {
            type: "Avenida de Josep Vincenç Foix 85, 08034",
            default: "Point",
          },
          coordinates: [41.399505991421, 2.102359213791152],
        },
        rating: 4.2,
        image: {
          type: "https://pbs.twimg.com/media/E6ADVnvWUAAlLgJ.jpg",
        },
      },
      {
        name: "Club Tennis Taula Poblenou", //TABLE-TENNIS 3
        description: "Indoor",
        location: {
          type: {
            type: "Carrer Fluvia 195, 08020",
            default: "Point",
          },
          coordinates: [41.41188886058594, 2.201731868049581],
        },
        rating: 4.9,
        image: {
          type: "https://img3.localgymsandfitness.com/528/608/882118375286083.jpg",
        },
      },
    ];

    const createdEvents = await Venue.create(allVenues);
    console.log(allVenues);
  } catch (error) {
    console.log(error);
  }
  // disconnect after seeding
  mongoose.disconnect();
};

seedVenues();
