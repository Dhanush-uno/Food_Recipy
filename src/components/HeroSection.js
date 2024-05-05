import { Link } from 'react-router-dom';
import CustomImage from './CustomImage';

export default function HeroSection() {
    const images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwfnjc-H2gxjKjstP2bHOckcKb1z5cM6j5Dt3YD_EH4Q&s",
        "https://media.post.rvohealth.io/wp-content/uploads/2022/09/frozen-dinner-meal-meatloaf-mashed-potatoes-vegetables-732x549-thumbnail-732x549.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/HaluskyzoZiaru.JPG/640px-HaluskyzoZiaru.JPG",
        "https://recipes.net/wp-content/uploads/2020/03/Fast-Food.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeOSic1YvYthJrnwkqFRmgf3LAgOxMc8pkVLKLNJpSjg&s",
        "https://miro.medium.com/v2/resize:fit:592/0*NOpL9Cdt-dKsRFl9.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKTqyVwEvjU3btBqz9LNK6oHYuSIrRfiFST4Yck7U5mQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6nn1c_24yJ_9JqHYB75tehUsCk1kEDMzTw9pLJa17sg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHupHhWDV6ly4R3j7slps0Aw1cBR52Jn7PDuLB7_Ub0A&s"
    ];

    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">Discover Exquisite Culinary Delights</h1>
                <p className="info">FoodReciGen is your gateway to a world of gastronomic wonders. Whether you're craving comforting classics or adventurous global cuisine, our collection of recipes has something to tantalize every palate. Best of all, our service is entirely complimentary. So, embark on a culinary journey and start exploring now.</p>
                <Link to='/Recipes'><button className="btn">Explore Now</button></Link>
            </div>
            <div className="col gallery">
                {images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"90%"} />
                ))}
            </div>
        </div>
    );
}
