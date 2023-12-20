const tours = [
    {
       header:"ISSYK-KUL LAKE",
       aboutText:"Lorem Ipsum",
       tourId:"issyk-kul-lake"
    },
    {
        header:"Exampple tour",
        aboutText:"Lorem Ipsum ",
        tourId:"example1344545"
    },
    {
        header:"Exampple tour",
        aboutText:"Lorem Ipsum ",
        tourId:"example1344545"
    },
    {
        header:"Exampple tour",
        aboutText:"Lorem Ipsum ",
        tourId:"example1344545"
    },
    {
        header:"Exampple tour",
        aboutText:"Lorem Ipsum ",
        tourId:"example1344545"
    }
]

export function getTour(tourId) {
    return tours[
        tours.findIndex(tour => tour.tourId === tourId)
    ]
}

export default tours;