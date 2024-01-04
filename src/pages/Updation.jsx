import { useParams } from 'react-router-dom';

const Updation = () => {
    return ( 
    <div className="update-container">
        <h1>Rosary Update</h1>
        <div className="form">
            <input type="text" id="name" placeholder="John"/>
            <input type="number" id="decade" />
            <button className="btn"></button>
            
        </div>
    </div>
    
        
    );
}
 
export default Updation;