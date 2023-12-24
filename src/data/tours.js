import image1 from '../images/slide1.jpg';
import image2 from '../images/slide2.jpg';
import image3 from '../images/slide3.jpg';
import image4 from '../images/slide4.jpg';
import image5 from '../images/slide5.jpg';
import image6 from '../images/slide6.jpg';
import background1 from '../images/tour1background.jpg';
import background2 from '../images/tour2background.jpg';
import background3 from '../images/tour3background.jpg';
import background4 from '../images/tour4background.jpg';

const tours = {
    header: 'Tours',
    tours: [
        {
            name: "ISSYK-KUL LAKE",
            title: "Lorem Ipsum",
            itemId: '1',
            image: image1,
            mainBackground: background1,
        },
        {
            name: "ISSYK-KUL LAKE",
            title: "Lorem Ipsum",
            itemId: "2",
            image: image2,
            mainBackground: background2,
        },
        {
            name: "ISSYK-KUL LAKE",
            title: "Lorem Ipsum",
            itemId: "3",
            image: image3,
            mainBackground: background3,
        },
        {
            name: "ISSYK-KUL LAKE",
            title: "Lorem Ipsum",
            itemId: "4",
            image: image4,
            mainBackground: background4,
        },
        {
            name: "ISSYK-KUL LAKE",
            title: "Lorem Ipsum",
            itemId: "5",
            image: image5,
            mainBackground: background4,
        },
        {
            name: "ISSYK-KUL LAKE",
            title: "Lorem Ipsum",
            itemId: "6",
            image: image6,
            mainBackground: background4,
        },
    ]
}

export function getTour(itemId) {
    const tour = tours.tours
    return tour[
        tour.findIndex(tour => tour.itemId === itemId)
    ]
}

export default tours;