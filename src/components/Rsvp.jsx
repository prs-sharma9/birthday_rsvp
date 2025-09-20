import { useState } from "react";
import { sendEmail } from "../contact";

function Rsvp() {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [isAttending, setIsAttending] = useState(true);

    const [guestCount, setGuestCount] = useState(0);
    
    function handleToggle() {
        console.log("handleToggle")
        setIsAttending(!isAttending)
        setGuestCount(0);
    }

    function resetForm() {
        console.log("Reset form");
        setIsAttending(false);
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
            isComing: isAttending?"coming":"not coming",
            message: "No of guest: "+guestCount,
        }
        const result = await sendEmail(guestInfo);
        if(result) {
            resetForm();
        }
    }

    return (
        <section id="form-section">
            <p>{isAttending?"🥳🥳":"🥺🥺"} Party RSVP {isAttending?"🥳🥳":"🥺🥺"}</p>
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

                <label className="labels" htmlFor="is-attending-btn-area">Attending</label>
                <div id="is-attending-btn-area" className="input-field">
                    <button 
                    onClick={ handleToggle }
                    type="button"
                    className={isAttending ? 'toggle-btn on' : 'toggle-btn off'}
                    ></button>
                </div>
                
                {
                    isAttending ? 
                    <section id="detailed-guest-list">
                        <label className="labels" htmlFor="guest_count">No. of Guest</label>
                        <input 
                        id="guest_count"
                        type="number"
                        className="input-field"
                        value={guestCount}
                        onChange={handleGuestCountUpdate}
                        />
                    </section> : 
                    null
                }

                <p id="submit-btn" onClick={handleSubmit}>Submit</p>
            </div>
        </section>
    );
}

export default Rsvp;