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
        setIsApple(os);

        
    }, [])

    function handleMapRequest() {
        let map_url = 'https://maps.app.goo.gl/P7DiVDm12CsYQP2k8'
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