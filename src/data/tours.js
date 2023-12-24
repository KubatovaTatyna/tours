import image from '../images/actSlide1.jpg'

const tours = {
    header: 'Tours',
    tours: [
        {
            name: "ISSYK-KUL LAKE",
            title: "Lorem Ipsum",
            itemId: "issyk-kul-lake",
            image: image,
        },
        {
            name: "ISSYK-KUL LAKE",
            title: "Lorem Ipsum",
            itemId: "issyk-kul-lake",
            image: image,
        },
        {
            name: "ISSYK-KUL LAKE",
            title: "Lorem Ipsum",
            itemId: "issyk-kul-lake",
            image: image,
        },
        {
            name: "ISSYK-KUL LAKE",
            title: "Lorem Ipsum",
            itemId: "issyk-kul-lake",
            image: image,
        },
        {
            name: "ISSYK-KUL LAKE",
            title: "Lorem Ipsum",
            itemId: "issyk-kul-lake",
            image: image,
        },
        {
            name: "ISSYK-KUL LAKE",
            title: "Lorem Ipsum",
            itemId: "issyk-kul-lake",
            image: image,
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