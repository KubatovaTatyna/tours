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
        header:"hello",
        aboutText:"Lorem Ipsum ",
        tourId:"example345345"
    },
    {
        header:"world",
        aboutText:"Lorem Ipsum ",
        tourId:"example434545"
    },
    {
        header:"tatyna",
        aboutText:"Lorem Ipsum ",
        tourId:"dfgfdg"
    },
    {
        header:"lkflskdf",
        aboutText:"Lorem Ipsum ",
        tourId:"dfgdf"
    },
    {
        header:"hello",
        aboutText:"Lorem Ipsum ",
        tourId:"dfgdf"
    },
    {
        header:"Exampple tour",
        aboutText:"Lorem Ipsum ",
        tourId:"sdfsdf"
    },
    {
        header:"Exampple tour",
        aboutText:"Lorem Ipsum ",
        tourId:"example223sdfsd333"
    }
]

export function getTour(tourId) {
    return tours[
        tours.findIndex(tour => tour.tourId === tourId)
    ]
}

export default tours;