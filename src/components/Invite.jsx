// import {event_address, event_date, event_day, event_month, event_time, kid_name } from "../const.js";
import { useEffect, useState } from "react";

function Invite() {

    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        const isApple = /iPad|iPhone|iPod/.test(navigator.userAgent)
        console.log(`IOS check: ${isApple}`)
        setIsIOS(isApple);

        
    }, [])

    function getMapComponent() {
        if(!isIOS) {
            return (
                <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5007.342770967677!2d-114.20518152351222!3d51.132969221730626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537168e28971408f%3A0xa4182a92c9e48672!2s12%20Arbour%20Lake%20Dr%20NW%2C%20Calgary%2C%20AB%20T3G%204A3!5e0!3m2!1sen!2sca!4v1758332257211!5m2!1sen!2sca" width="100%" height="300px" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            );
        } else {
            return (
                <iframe id="map" src="https://maps.apple.com/place?address=12+Arbour+Lake+Dr+NW%2C+Calgary+AB+T3G+4A3%2C+Canada&coordinate=51.1331424%2C-114.2025665&name=12+Arbour+Lake+Dr+NW" width="100%" height="auto" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            )
        }
    }
    return (
        <section>
            <div id="theme_image">
                <img src="invitation_card.jpeg" alt="Birthday Theme Image"/>
            </div>

            <div id="location">
                <div id="map_container">
                    {getMapComponent()}
                </div>
            </div>

        </section>
    );
}

export default Invite;