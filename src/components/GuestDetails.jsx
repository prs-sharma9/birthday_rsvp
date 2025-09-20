function GuestDetails(prop) {

    console.log(prop);
    const guestCount = prop.guestCount;
    const handleGuestCount = prop.updateGuestCount;

    return (
        <section id="detailed-guest-list">
            <label className="labels" htmlFor="guest_count">No. of Guest</label>
            <input 
            id="guest_count"
            type="number"
            className="input-field"
            value={guestCount}
            onChange={handleGuestCount}
            />
        </section>
    );
}

export default GuestDetails;