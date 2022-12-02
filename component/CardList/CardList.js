import './CardList.css'
import Card  from "../Card/Card";

const CardList = ({robots}) => {
        return(
            <div className="card-list" key={robots.id}>
            {robots.map((robot) => {
                return(
                <Card robot={robot}/>
                )})}
            </div>
        )
 }
export default CardList;