import getTimeDifference from "@/util/getTimeDifference";
import { useSelector } from "react-redux";

// hooks/useFormattedFlightTimes.js
const useFormattedFlightTimes = (selectedFlight) => {
    const arrival_time = selectedFlight?.common_info?.arrival_time;
    const departure_time = selectedFlight?.common_info?.departure_time;

    const originCode = selectedFlight?.common_info?.origin_code;
    const destinationCode = selectedFlight?.common_info?.destination_code;
    const duration = selectedFlight?.common_info?.duration;
    const stops = selectedFlight?.common_info?.stops;
    const flightNumber = selectedFlight?.common_info?.flight_number;

    const Business = selectedFlight?.Business
    const Economy = selectedFlight?.Economy
    const common_info = selectedFlight?.common_info
    const segments = common_info?.segments;

    const departureAirport = Array.isArray(segments) && segments.length > 0
        ? segments[0]?.origin_name
        : '';

    const arrivalAirport = Array.isArray(segments) && segments.length > 0
        ? segments[segments.length - 1]?.destination_name
        : '';

    const {
        transaction_id: ecoID,
        total_fare_USD: ecoFare
    } = Economy ?? {};

    const {
        transaction_id: busID,
        total_fare_USD: busFare
    } = Business ?? {};


    // const airPortsItems = useSelector((state) => state.flights.airPorts?.items) || [];


    // const originAirPort = airPortsItems.find((a) => a.id === origin_id);
    // const destAirPort = airPortsItems.find((a) => a.id === destination_id);


    // const { iataCode, airPortTranslations } = originAirPort || {};
    // const { iataCode: destIataCode, airPortTranslations: distAirPortTranslations } = destAirPort || {};

    // const { country, city } = airPortTranslations?.find(a => a.languageCode === i18n.language) || {};
    // const { country: destCountry, city: destCity } = distAirPortTranslations?.find(a => a.languageCode === i18n.language) || {};

    const formatTime = (timeStr) => timeStr?.slice(0, 5) || "";
    // const { hours, minutes } = getTimeDifference(departure_time, arrival_time);

    return {
        arrivalTime: formatTime(arrival_time),
        departureTime: formatTime(departure_time),
        // hours,minutes,
        originCode, destinationCode, duration, stops, flightNumber, ecoID, ecoFare, busID, busFare, segments, departureAirport, arrivalAirport
    };
};

export default useFormattedFlightTimes;
