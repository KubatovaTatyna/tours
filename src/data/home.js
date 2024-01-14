import background from '../images/headerBackground.jpg';
import gallery1 from '../images/img1.jpg';
import gallery2 from '../images/img2.jpg';
import gallery3 from '../images/img3.jpg';
import gallery4 from '../images/img4.jpg';
import gallery5 from '../images/img5.jpg';
import gallery6 from '../images/img6.jpg';
import gallery7 from '../images/img7.jpg';
import team1 from '../images/team1.jpeg';
import team2 from '../images/team2.jpeg';
import team3 from '../images/team3.jpeg';
import team4 from '../images/team4.jpeg';
import team5 from '../images/team5.jpg';

const home = {
    header: 'KYRGYZSTAN',
    mainBackground: background,
    activitiesHeader: 'Activities for everyone',
    activitiesSmallText: 'HUNDREDS OF',
    ourTeamHeader: 'Our Team',
    ourTeamSmallText: 'ABOUT US',
    ourTeam: [
        {
            name: 'Zarina',
            position: 'Position',
            image: team1,
            itemId: '1',
            class: 'teamImage'
        },
        {
            name: 'Rustam',
            position: 'Position',
            image: team2,
            itemId: '2',
            class: 'teamImage'
        },
        {
            name: 'Emil',
            position: 'Position',
            image: team3,
            itemId: '2',
            class: 'teamImage'
        },
        {
            name: 'Mirlan',
            position: 'Position',
            image: team4,
            itemId: '2',
            class: 'teamImage'
        },
        {
            name: 'Samat',
            position: 'Position',
            image: team5,
            itemId: '2',
            class: 'teamImage'
        }
    ],
    gallery: [{
        image: gallery1,
    },
    {
        image: gallery2,
    },
    {
        image: gallery3,
    },
    {
        image: gallery4,
    },
    {
        image: gallery5,
    },
    {
        image: gallery6,
    },
    {
        image: gallery7,
    }]
}

export default home;
