import { init, send } from "@emailjs/browser";
import { emailjs_pub_key } from "./const";
const options = {
        publicKey: emailjs_pub_key,
    }

export function initializeEmailjs() {
    init(options);
}

export async function sendEmail(guestInfo) {
    console.log(`sending guest info`);
    console.log(guestInfo);
    try {
        const response = await send('service_1xk5ou1', 'bday_rsvp', guestInfo, options)
        console.log(response.status + ":" + response.text);
        alert("Thank you !!");
        return true;
    } catch(error) {
        console.error(error);
        alert("Something went wrong!! Please contact the host");
        return false;
    }

}