import Card from "./Card";
import data from '../data';



function Tours({ tours, removeTour }) {
    return (
        <div className="container">
            <div>
                <h2 className="title" > Plan With Anish</h2>
            </div>
            <div className="cards">
                {
                    tours.map((tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour} />


                    })
                }
            </div>
        </div>
    );

}
export default Tours;