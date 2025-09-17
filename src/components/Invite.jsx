import {event_address, event_date, event_day, event_month, event_time, kid_name } from "../const.js";

function Invite() {

    return (
        <section>
            <p>PLEASE JOIN US TO CELEBRATE!</p>
            <p id="invite_title">{kid_name}'s First Birthday</p>
            <div id="theme_image">
                <img src="bdTheme.png" alt="Birthday Theme Image"/>
            </div>
            <div id="date-time">
                <p className="tb_border">{event_day}</p>
                <div id="date">
                    <p className="date-info">{event_date}</p>
                    <p className="date-info">{event_month}</p>
                </div>
                
                <p className="tb_border">{event_time}</p>
            </div>
            <div id="location">
                <p>Address:</p>
                <p>{event_address}</p>
                <div id="map_container">
                    <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.6650810479105!2d-114.2025602!3d51.1330855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537168e29b286941%3A0xaa1b756329684f97!2sArbour%20Lake%20Residents%20Association!5e0!3m2!1sen!2sca!4v1757473253076!5m2!1sen!2sca" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    );
}

export default Invite;