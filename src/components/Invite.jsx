// import {event_address, event_date, event_day, event_month, event_time, kid_name } from "../const.js";
import { useEffect, useState } from "react";

function Invite() {

    const [isApple, setIsApple] = useState(false);

    function checkIsApple() {
        const userAgent = navigator.userAgent;
        const platform = navigator.platform;
        let os = "Unknown OS";

        if (platform.includes("Win")) {
            return false;
        } else if (platform.includes("Mac")) {
            return true;
        } else if (platform.includes("X11") || platform.includes("Linux")) {
            return false;
        } else if (userAgent.includes("Android")) {
            return true;
        } else if (userAgent.includes("iPhone") || userAgent.includes("iPad") || userAgent.includes("iPod")) {
            return true;
        }

        return os;
    }

    useEffect(() => {
        const os = checkIsApple()
        alert(`is apple : ${os}`)
        setIsApple(os);

        
    }, [])

    function handleMapRequest() {
        let map_url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5007.342770967677!2d-114.20518152351222!3d51.132969221730626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537168e28971408f%3A0xa4182a92c9e48672!2s12%20Arbour%20Lake%20Dr%20NW%2C%20Calgary%2C%20AB%20T3G%204A3!5e0!3m2!1sen!2sca!4v1758332257211!5m2!1sen!2sca'
        if(isApple) {
            map_url = 'https://maps.apple.com/place?address=12+Arbour+Lake+Dr+NW%2C+Calgary+AB+T3G+4A3%2C+Canada&coordinate=51.1331424%2C-114.2025665&name=12+Arbour+Lake+Dr+NW'
        }

        window.open(map_url, '_blank').focus();
    }
    
    return (
        <section>
            <div id="theme_image">
                <img src="invitation_card.jpeg" alt="Birthday Theme Image"/>
            </div>

            <div id="location">
                <p id="btn" onClick={handleMapRequest}>Open location in Map</p>
            </div>

        </section>
    );
}

export default Invite;