import image1 from '../images/slide1.jpg';
import image2 from '../images/slide2.jpg';
import image3 from '../images/slide3.jpg';
import image4 from '../images/slide4.jpg';
import image5 from '../images/slide5.jpg';
import image6 from '../images/slide6.jpeg';
import image6reserve from '../images/slide6.jpg';
// import background1 from '../images/tour1background.jpg';
// import background2 from '../images/tour2background.jpg';
import background3 from '../images/tour3background.jpg';
import background4 from '../images/tour4background.jpg';

const tours = {
    header: 'Tours',
    tours: [
        {
            name: "NOMADIC LIFESTYLE",
            title: "Kazakhstan-Kyrgyzstan Combo Tour",
            itemId: 'nomadicLifestyle',
            image: image1,
            mainBackground: image1,
            aboutTour: 'During the tour, you will explore the amazing places of two Central Asian countries, you will visit the most beautiful lakes, picturesque canyons, majestic mountains of Kyrgyzstan and Kazakhstan. You will be able to immerse into the nomadic life, ride horses, watch eagle hunting demonstration, stay for overnight in a yurt, try Kyrgyz and Kazakh national cuisine.  ',
            highlights: `Pick up from your hotel in Almaty city
            Charyn Canyon "Valley of Castles"
            Free time for walking and taking photos 
            Lunch 
            Saty Village 
            Kaindy Lake
            Free time for hiking or horseback riding to the lake 
            Dinner and overnight at the guesthouse in Saty Village `,
            duration: '9 days/8 nights',
            dayPlans: [{
                dayHeader: 'Day 1',
                dayAbout: 'Pick up from your hotel in Almaty city \n Charyn Canyon "Valley of Castles" \n Free time for walking and taking photos \n Lunch \n Saty Village \n Kaindy Lakes \n Free time for hiking or horseback riding to the lake \n Dinner and overnight at the guesthouse\n'
            },
            {
                dayHeader: 'Day 2',
                dayAbout: `Breakfast 
                Departure for Kolsay 1 Lake
                Free time for walking or taking a boat trip 
                Departure for Karakol town 
                Driving to Kegen border
                Picnic by the river
                Crossing the border into Kyrgyzstan
                Driving to Karakol town
                Dinner at the ethno restaurant in Karakol 
                Overnight at a hotel in Karakol `
            },
            {
                dayHeader: 'Day 3',
                dayAbout: `Breakfast  
                Purchase some food for a picnic at a market 
                Departure for Turgen Gorge 
                Picnic by the river at Turgen Gorge 
                Free time for hiking 
                Departure for Jyrgalan Valley 
                Free time for walking and taking photos 
                Dinner with a local family at Teploklyuchenka Village 
                Ak-Suu  Kench hot springs 
                Homestay `
            },
            {
                dayHeader: 'Day 4',
                dayAbout: `Breakfast 
                Departure for Karakol Gorge 
                Visit Karakol Ski Resort 
                Lunch at Karakol town 
                Visit a souvenir shop (optional)
                Visit Dungan Mosque and Holy Trinity Ortodox Church  
                Visit local bazaar 
                Dinner at a restaurant in Karakol town 
                Overnight at a hotel in Karakol `
            },
            {
                dayHeader: 'Day 5',
                dayAbout: `Breakfast 
                Departure for southern shore of Issyk-Kul Lake
                Driving to Jeti-Oguz Gorge
                Free time for walking and taking photos 
                Departure for Barskoon Gorge
                Free time for hiking to waterfalls
                Lunch
                Departure for Skazka Canyon
                Free time for short hiking and taking photos 
                Departure for Ton Village
                Dinner and overnight at the yurt camp near Issyk-Kul Lake `
            },
            {
                dayHeader: 'Day 6',
                dayAbout: `Breakfast 
                Eagle hunting show near Issyk-Kul Lake 
                Departure for Son-Kul Lake
                Driving to  Son-Kul  Lake through Kochkor Village and Kalmak-Ashuu Pass with stops for taking  photos
                Picnic on the way 
                Arrival at Son-Kul Lake
                Free time for horse riding or walking 
                Dinner and overnight at the yurt camp near Son-Kul Lake `
            },
            {
                dayHeader: 'Day 7',
                dayAbout: `Breakfast 
                Departure for Kok-Moinok Canyon 
                Driving through  Kalmak - Ashuu Pass
                Lunch at  Kochkor Village
                Arrive at Kok-Moinok Canyon 
                Free time for walking and taking photos 
                Departure for Chon-Kemin Valley
                Free time for hiking or horseback riding 
                Dinner and overnight at the guesthouse 
                Campfire `
            },
            {
                dayHeader: 'Day 8',
                dayAbout: `Breakfast 
                Departure for Burana Tower 
                Visit Burana Tower 
                Lunch on the way 
                Arrival at Bishkek city
                Visit Ala-Too Square
                Dinner at a restaurant 
                Overnight at a hotel in Bishkek `
            },
            {
                dayHeader: 'Day 9',
                dayAbout: `Breakfast 
                Departure for  Kazakhstan border
                Crossing Kyrgyzstan-Kazakhstan border 
                Transfer to Almaty city `
            }
            ],
            included: ['Transfer in air-conditioned and comfortable vehicle',
                'Airport transfer',
                'Experienced driver-guide',
                'Accommodation ',
                '8 Breakfast',
                '5 Dinner ',
                'Entrance fees',
                'Eagle hunting show',
                'UAZ (off-road vehicle to get to Kaindy Lake)'
            ],
            excluded: ['International flights',
                'Insurance',
                'Lunch meals',
                'Dinner at restaurants ',
                'Renting horses ',
                'Personal expenses',
            ],
            price: [
                {
                    priceHeader: '2 pax',
                    price: '950$'
                },
                {
                    priceHeader: '3-4 pax',
                    price: '800$'
                },
                {
                    priceHeader: '5-10 pax',
                    price: '600$'
                },
            ]
        },
        {
            name: "WINTER TOUR",
            title: "Winter Tour",
            itemId: "winterTour",
            image: image5,
            mainBackground: image5,
            aboutTour: 'Kyrgyzstan is a stunning destination to visit all year round. Winter is a perfect time to visit Kyrgyzstan. Kyrgyzstan  becomes stunningly beautiful at that time of the year. The landscapes become incredibly majestic, trees are covered with a brilliant white blanket of snow. You can enjoy skiing, snowboarding and horseback riding. Kyrgyzstan is also popular for its natural hot springs, they  are very beneficial for health. While you can enjoy them all year round, they are particularly pleasant in winter for relaxing in hot water after skiing or spending time in the mountains.',
            highlights: 'Bishkek city, Ala-Archa National Park, Burana Tower, Chon-Kemin Valley, Kok-Moinok  Canyon, Bokonbayevo Village,  Skazka Canyon, Barskoon Gorge, Jeti-Oguz Gorge, Karakol town, Karakol Gorge, Karakol Ski Resort, Ak-Suu Kench hot springs, Jyrgalan Valley.',
            duration: '6 days/5 nights',
            dayPlans: [{
                dayHeader: 'Day 1',
                dayAbout: `Pick up from the Manas International Airport
                Ala-Archa National Park 
                Lunch 
                Burana Tower 
                Chon-Kemin Valley 
                Free time for hiking or horseback riding 
                Dinner and overnight at the guesthouse `
            },
            {
                dayHeader: 'Day 2',
                dayAbout: `Breakfast 
                Free time for hiking or horseback riding 
                Departure for  Kok-Moinok Canyon 
                Lunch on the way 
                Driving along the southern shore of Issyk-Kul Lake 
                Arrival at Bokonbayevo Village 
                Dinner and overnight at the guesthouse `
            },
            {
                dayHeader: 'Day 3',
                dayAbout: `Breakfast 
                Eagle hunting show near Issyk-Kul Lake 
                Skazka Canyon 
                Lunch on the way 
                Barskoon Gorge 
                Jeti-Oguz Gorge 
                Departure for Karakol town 
                Dinner at the ethno-restaurant in Karakol 
                Overnight at a hotel`
            },
            {
                dayHeader: 'Day 4',
                dayAbout: `Breakfast 
                Departure for Karakol Gorge 
                Karakol Ski Resort 
                Lunch
                Free time for skiing 
                Departure for Teploklyuchenka Village 
                Ak-Suu Kench hot springs 
                Dinner with a local family 
                Homestay 
                `
            },
            {
                dayHeader: 'Day 5',
                dayAbout: `Breakfast 
                Free time for walking or horseback riding  
                Lunch with a local family 
                Departure for Jyrgalan Valley 
                Free time for walking 
                Departure for Karakol town 
                Dinner at a restaurant 
                Overnight at a hotel`
            },
            {
                dayHeader: 'Day 6',
                dayAbout: `Breakfast 
                Departure for Bishkek
                Driving along the northern shore of Issyk-Kul Lake 
                Lunch at Cholpon-Ata town
                Arrival at Bishkek
                Ala-Too Square 
                Dinner at a restaurant 
                Transfer to the airport`
            }],
            included: ['Transfer in air-conditioned and comfortable vehicle ',
                'Airport transfer',
                'Experienced driver-guide',
                'Accommodation ',
                '5 Breakfast',
                '1 Launch',
                '3 Dinner ',
                'Entrance fees',
                'Eagle hunting show',
            ],
            excluded: ['International flights',
                'Insurance',
                'Lunch meals',
                'Dinner at restaurants ',
                'Renting horses ',
                'Hot springs entrance fee',
                'Personal expenses',
            ],
            price: [
                {
                    priceHeader: '2 pax',
                    price: '705$'
                },
                {
                    priceHeader: '3-4 pax',
                    price: '565$'
                },
                {
                    priceHeader: '5-10 pax',
                    price: '465$'
                },
            ]
        },
        {
            name: "AMAZING KYRGYZSTAN",
            title: "Amazing Kyrgyzstan",
            itemId: "amazingKyrgyzstan",
            image: image3,
            mainBackground: background3,
            aboutTour: `During the tour, you will explore  Kyrgyzstan’s natural treasures:  Issyk-Kul Lake and Son-Kul Lake. These amazing lakes are the gems of the country, you will be enchanted by the stunning beauty of them. 
            Son-Kul is the best place for star gazing, you will be able to observe the Milky Way. You will have an opportunity to meet nomad families, immerse into the nomadic life, watch breathtaking sunsets, see lush meadows, beautiful wild flowers and snow-capped mountains, explore picturesque canyons and beautiful gorges, experience horseback riding, watch eagle hunting show, try delicious national cuisine and kymys (mare's milk).`,
            highlights: ' Bishkek city, Ala-Archa National Park, Burana Tower, Chon-Kemin Valley, Son-Kul Lake, Skazka Canyon, Barskoon Gorge, Karakol town, Turgen Gorge, Jyrgalan Valley, Kok-Moinok Canyon. ',
            duration: '6 days/5 nights',
            dayPlans: [{
                dayHeader: 'Day 1',
                dayAbout: `Pick up from the Manas International Airport
                Ala-Archa National Park 
                Lunch 
                Burana Tower 
                Chon-Kemin Valley 
                Free time for hiking or horseback riding 
                Dinner and overnight at the guesthouse `
            },
            {
                dayHeader: 'Day 2',
                dayAbout: `Departure for Son-Kul Lake 
                Short stop at Kochkor town for having lunch 
                Kalmak-Ashuu Pass
                Arrival at Son-Kul Lake 
                Free time for walking and horseback riding 
                Dinner and overnight at the yurt camp near Son-Kul Lake `
            },
            {
                dayHeader: 'Day 3',
                dayAbout: `Breakfast 
                Departure for Ton Village through "33 parrots" Pass
                Short stops for taking photos 
                Lunch on the way 
                Arrival at Ton Village 
                Eagle hunting show near Issyk-Kul Lake 
                Dinner and overnight at the yurt camp near Issyk-Kul Lake `
            },
            {
                dayHeader: 'Day 4',
                dayAbout: `Breakfast 
                Skazka Canyon 
                Barskoon Gorge 
                Hiking to waterfalls
                Lunch
                Jeti-Oguz Gorge 
                Arrival at Karakol town 
                Dinner at the ethno restaurant in Karakol 
                Overnight at  a hotel `
            },
            {
                dayHeader: 'Day 5',
                dayAbout: `Breakfast 
                Turgen Gorge 
                Free time for walking and sightseeing 
                Picnic by the river 
                Jyrgalan Valley 
                Free time for walking or horseback riding 
                Dinner at a restaurant in Karakol 
                Overnight at a hotel`
            },
            {
                dayHeader: 'Day 6',
                dayAbout: `Breakfast 
                Departure for Bishkek
                Lunch at Cholpon-Ata town 
                Kok-Moinok Canyon 
                Arrival at Bishkek 
                Transfer to the airport`
            }
            ],
            included: ['Transfer in air-conditioned and comfortable vehicle',
                'Airport transfer',
                'Experienced driver-guide',
                'Accommodation ',
                '5 Breakfast',
                '3 Dinner ',
                'Entrance fees',
                'Eagle hunting show',
            ],
            excluded: ['International flights',
                'Insurance',
                'Lunch meals',
                'Dinner at restaurants ',
                'Renting horses ',
                'Personal expenses',
            ],
            price: [
                {
                    priceHeader: '2 pax',
                    price: '698$'
                },
                {
                    priceHeader: '3-4 pax',
                    price: '550$'
                },
                {
                    priceHeader: '5-10 pax',
                    price: '450$'
                },
            ]
        },
        {
            name: "ISSYK-KUL LAKE",
            title: "Issyk-Kul Lake - the pearl of Kyrgyzstan.",
            itemId: "issykkulLake",
            image: image4,
            mainBackground: background4,
            aboutTour: `Alpine lake Issyk-Kul is one of the amazing, most beautiful and healing lakes of our planet. No wonder it is called the pearl of Kyrgyzstan. The second largest saline lake in the world, its name in Kyrgyz means “hot lake”– though surrounded by spectacular snow capped peaks, the water never freezes. It is located at an altitude of 1,608 meters above sea level and ranks seventh in the list of the deepest lakes in the world. 
            During the tour you will discover the breathtaking  beauty of Skazka and Kok-Moinok Canyons,  visit the most picturesque gorges of Kyrgyzstan, get a unique opportunity to witness an eagle hunting show, experience nomadic lifestyle and stay in a yurt, go horseback riding and enjoy local food.`,
            highlights: ' Bishkek city, Chon-Kemin Valley, Kok-Moinok Canyon, Ton Village, Barskoon Gorge waterfalls, Jeti-Oguz Gorge, Karakol town, Dungan  Mosque, Holy Trinity Ortodox Church, Grigoriyev Gorge, The Ak-Suu River.',
            duration: '4 days/3 nights',
            dayPlans: [{
                dayHeader: 'Day 1',
                dayAbout: `Pick up from the Manas International Airport
                Departure for the  Chon-Kemin National Park 
                Visit Burana Tower, the architectural and archeological monument of Medieval ages.
                Lunch on the way 
                Free time for hiking or horseback riding in Chon-Kemin 
                Dinner and overnight at the guesthouse.`
            },
            {
                dayHeader: 'Day 2',
                dayAbout: `Breakfast 
                Kok-Moinok Canyon 
                Lunch
                Ton Village 
                Eagle hunting show 
                Dinner and overnight at the yurt camp near Issyk-Kul Lake `
            },
            {
                dayHeader: 'Day 3',
                dayAbout: `Breakfast 
                Skazka Canyon 
                Barskoon Gorge 
                Hiking to waterfalls
                Lunch
                Jeti-Oguz Gorge 
                Karakol town 
                Dinner at the ethno restaurant 
                Overnight at a hotel`
            },
            {
                dayHeader: 'Day 4',
                dayAbout: `Breakfast 
                Dungan Mosque 
                The Holy Trinity Ortodox Church 
                Grigoriyevskoe Gorge 
                Lunch
                Departure for Bishkek
                Transfer to the airport `
            }
            ],
            included: ['Transfer in air-conditioned and comfortable vehicle',
                'Airport transfer',
                'Experienced driver-guide',
                'Accommodation ',
                '3 Breakfast',
                '2 Dinner ',
                'Entrance fees',
                'Eagle hunting show',
            ],
            excluded: ['International flights',
                'Insurance',
                'Lunch meals',
                'Dinner at restaurants ',
                'Renting horses ',
                'Personal expenses',
            ],
            price: [
                {
                    priceHeader: '2 pax',
                    price: '580$'
                },
                {
                    priceHeader: '3-4 pax',
                    price: '480$'
                },
                {
                    priceHeader: '5-10 pax',
                    price: '380$'
                },
            ]
        },
        {
            name: "Extended Weekend Getaway",
            title: "Extended Weekend Getaway ",
            itemId: "weekendGetaway",
            image: image2,
            mainBackground: image2,
            aboutTour: `Join an incredible 4-day adventure to uncover the hidden treasures of Bishkek city, Chunkurchak Gorge and Ala-Archa National Park. Your journey will lead you to an ancient Burana minaret, lush alpine meadows and majestic mountains of Kyrgyzstan. 
            You will experience a  horseback riding and try delicious Kyrgyz national cuisine. 
            Don't miss this unforgettable experience!`,
            highlights: `Bishkek city, 
            Chon-Kemin Valley, 
            Chunkurchak Gorge, 
            Ala-Archa National Park `,
            duration: '4 days/3 nights',
            dayPlans: [{
                dayHeader: 'Day 1',
                dayAbout: `Pick up from the Manas International Airport 
                Departure for Bishkek 
                Kyrgyz National Philharmonic 
                Statue of Manas
                Victory Square 
                Lunch
                Opera and Ballet Theater 
                Oak Park
                The National Historical Museum 
                Open Air Art Gallery 
                Dinner at a restaurant in Bishkek
                Overnight at a hotel in Bishkek `
            },
            {
                dayHeader: 'Day 2',
                dayAbout: `Breakfast 
                Departure for Chon-Kemin Valley 
                Visit Burana Tower 
                Lunch
                Arrival at Chon-Kemin Valley 
                Free time for hiking or horseback riding 
                Dinner and overnight at the guesthouse `
            },
            {
                dayHeader: 'Day 3',
                dayAbout: `Breakfast 
                Departure for Chunkurchak Gorge 
                Lunch 
                Free time for walking and  exploring Chunkurchak Gorge 
                Dinner at a restaurant in Bishkek 
                Overnight at a hotel in Bishkek `
            },
            {
                dayHeader: 'Day 4',
                dayAbout: `Breakfast 
                Departure for Ala-Archa National Park 
                Free time for hiking 
                Lunch
                Departure for Bishkek
                Transfer to the airport`
            }
            ],
            included: ['Transfer in air-conditioned and comfortable vehicle',
                'Airport transfer',
                'Experienced driver-guide',
                'Accommodation ',
                '3 Breakfast',
                '2 Dinner ',
                'Entrance fee to Burana Tower ',
            ],
            excluded: ['International flights',
                'Insurance',
                'Lunch meals',
                'Dinner at restaurants ',
                'Renting horses ',
                'Personal expenses',
            ],
            price: [
                {
                    priceHeader: '2 pax',
                    price: '430$'
                },
                {
                    priceHeader: '3-4 pax',
                    price: '350$'
                },
                {
                    priceHeader: '5-10 pax',
                    price: '280$'
                },
            ]
        },
        {
            name: "Ala-Köl Lake ",
            title: "Ala-Köl Lake ",
            itemId: "alakollake",
            image: image6,
            mainBackground: image6reserve,
            aboutTour: `Ala-Köl Lake is one of the most beautiful lakes of Kyrgyzstan. It is situated at the altitude of 3532 meters. It is the most popular trekking route in Kyrgyzstan. 
            During this trip, you will visit Issyk-Kul Lake - the pearl of Central Asia, the most picturesque Kok-Moinok and Skazka Canyons, experience horseback riding and watch eagle hunting demonstration.`,
            highlights: `Bishkek city, 
            Burana Tower,
            Chon-Kemin Valley, 
            Kok-Moinok  Canyon, 
            Ton Village,  
            Skazka Canyon, 
            Barskoon Gorge, 
            Jeti-Oguz Gorge, 
            Karakol town, 
            Teploklyuchenka Village, 
            Altyn-Arashan Gorge, 
            Ala-Kol Lake.`,
            duration: '5 days/4 nights',
            dayPlans: [{
                dayHeader: 'Day 1',
                dayAbout: `Pick up from the Manas International Airport 
                Departure for Bishkek 
                Ala-Too Square 
                Lunch 
                Burana Tower 
                Chon-Kemin Valley 
                Free time for hiking or horseback riding 
                Dinner and overnight at the guesthouse  `
            },
            {
                dayHeader: 'Day 2',
                dayAbout: `Breakfast 
                Departure for  Kok-Moinok Canyon 
                Lunch on the way 
                Driving along the southern shore of Issyk-Kul Lake 
                Arrival at Ton Village 
                Eagle hunting show near Issyk-Kul Lake 
                Dinner and overnight at the yurt camp near Issyk-Kul Lake `
            },
            {
                dayHeader: 'Day 3',
                dayAbout: `Breakfast 
                Skazka Canyon 
                Barskoon Gorge (hiking to waterfalls)
                Lunch 
                Jeti-Oguz Gorge 
                Departure for Karakol town 
                Dinner at the ethno-restaurant in Karakol 
                Departure for Teploklyuchenka Village 
                Homestay `
            },
            {
                dayHeader: 'Day 4',
                dayAbout: `Breakfast
                Driving  2 hours to  Altyn-Arashan hot springs by UAZ (Russian off-road vehicle)
                Renting horses to go to Ala-Kol Lake 
                Picnic on the way 
                Arrival at Teploklyuchenka Village in the evening  
                Dinner with a local family 
                Homestay `
            },
            {
                dayHeader: 'Day 5',
                dayAbout: `Breakfast 
                Departure for Karakol town 
                Visit Dungan Mosque and Holy Trinity Ortodox Church 
                Departure  for Bishkek 
                Driving along the northern shore of Issyk-Kul Lake 
                Lunch on the  way 
                Transfer to the airport `
            }
            ],
            included: ['Transfer in air-conditioned and comfortable vehicle',
                'Airport transfer',
                'Experienced driver-guide',
                'Accommodation ',
                '4 Breakfast',
                '3 Dinner ',
                'Entrance fee to Burana Tower ',
                'UAZ (Russian off-road vehicle) to go to Altyn-Arashan hot springs ',
                'Horses and a guide to go to Ala-Kol Lake ',
                'Eagle hunting show',
            ],
            excluded: ['International flights',
                'Insurance',
                'Lunch meals',
                'Dinner at restaurants ',
                'Renting horses ',
                'Personal expenses',
            ],
            price: [
                {
                    priceHeader: '2 pax',
                    price: '690$'
                },
                {
                    priceHeader: '3-4 pax',
                    price: '550$'
                },
                {
                    priceHeader: '5-10 pax',
                    price: '420$'
                },
            ]
        }
    ]
}

export function getTour(itemId) {
    const tour = tours.tours
    return tour[
        tour.findIndex(tour => tour.itemId === itemId)
    ]
}

export default tours;