import data from "../public/event_details.json" with {type: 'json'};

const event_details = data.event_detail;

export const kid_name = event_details.name;
export const event_date = event_details.date;
export const event_month = event_details.month;
export const event_address = event_details.address;
export const event_time = event_details.time;
export const event_day = event_details.day;
export const emailjs_pub_key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;