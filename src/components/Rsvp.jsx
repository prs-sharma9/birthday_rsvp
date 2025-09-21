import { useState } from "react";
import { sendEmail } from "../contact";

function Rsvp() {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");

    const [guestCount, setGuestCount] = useState(0);
    
    // function handleToggle() {
    //     console.log("handleToggle")
    //     setGuestCount(0);
    // }

    function resetForm() {
        console.log("Reset form");
        setGuestCount(0);
        setFname("");
        setLname("");
    }

    function handleGuestCountUpdate(event) {
        let newValue = event.target.value;
        if(newValue < 0) newValue = 0;
        else if(newValue > 10) newValue = 10;
        setGuestCount(newValue);
    }

    async function handleSubmit() {
        if(fname.length <=0) {
            alert("Please enter your name.");
            return;
        }
        const guestInfo = {
            name: fname+" "+lname,
            isComing: "coming",
            message: "No of guest: "+guestCount,
        }
        const result = await sendEmail(guestInfo);
        if(result) {
            resetForm();
        }
    }

    return (
        <section id="form-section">
            {/* <p>{isAttending?"🥳🥳":"🥺🥺"} RSVP For Dhruv's Birthday Party {isAttending?"🥳🥳":"🥺🥺"}</p> */}
            <p id="title">RSVP For Dhruv's Birthday Party</p>
            <div id="map_container">
                <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.6650810479105!2d-114.2025602!3d51.1330855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537168e29b286941%3A0xaa1b756329684f97!2sArbour%20Lake%20Residents%20Association!5e0!3m2!1sen!2sca!4v1757473253076!5m2!1sen!2sca" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <p id="loc_txt">Address: 12 Arbour Lake Dr NW, Calgary, AB T3G 4A3</p>
            <div id="rsvp-form">
                <label className="labels" htmlFor="name_area">Name</label>
                <div id="name_area">
                    <input 
                    className="input-field"
                    type="text" 
                    id="f_name" 
                    placeholder="First Name"
                    maxLength={50}
                    value={fname}
                    onChange={(event) => {setFname(event.target.value)}}
                    />

                    <input
                    className="input-field"
                    type="text"
                    id="l_name"
                    placeholder="Last Name"
                    value={lname}
                    onChange={(event) => {setLname(event.target.value)}}
                    />
                </div>

                {/* <label className="labels" htmlFor="is-attending-btn-area">Attending</label> */}
                {/* <div id="is-attending-btn-area" className="">
                    <button 
                    onClick={ handleToggle }
                    type="button"
                    className={isAttending ? 'toggle-btn on' : 'toggle-btn off'}
                    ></button>
                </div> */}
                <section id="detailed-guest-list">
                    <label className="labels" htmlFor="guest_count">No. of Guest</label>
                    <input 
                    id="guest_count"
                    type="number"
                    className="input-field"
                    value={guestCount}
                    onChange={handleGuestCountUpdate}
                    />
                </section> 
                <p id="btn" onClick={handleSubmit}>Submit</p>
            </div>
        </section>
    );
}

export default Rsvp;