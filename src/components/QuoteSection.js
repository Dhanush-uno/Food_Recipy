import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"


export default function QouteSection(){
    return (
        <div className="section quote">
            <img src="https://res.cloudinary.com/dkjabp5gc/image/upload/v1707202987/WhatsApp_Image_2024-02-06_at_12.31.47_29c18070_nmdbae.jpg" alt="My Image" className="my-image" />
            <p className="qoute-text"><FontAwesomeIcon icon={faQuoteLeft} /> Food is not just eating energy. It's an experience</p>
            <p className="qoute-auther">~~Dhanush</p>
        </div>
    )
}
