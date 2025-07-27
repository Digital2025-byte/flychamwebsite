// hooks/useFlightRouteDetails.js
import formatDateReadble from "@/util/formatDateReadble";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const useFlightRouteDetails = () => {
    const { i18n } = useTranslation();
    const { searchParams, selectedPlan } = useSelector((state) => state.flights);
    const { commonInfo } = selectedPlan;
    const segments = commonInfo.segments

    const { origin_id, destination_id, date, date_return, flighttype } = searchParams;

    const airPortsItems = useSelector((state) => state.flights.airPorts?.items) || [];

    const originAirPort = airPortsItems.find((a) => a.id === origin_id);
    const destAirPort = airPortsItems.find((a) => a.id === destination_id);

    const {
        iataCode,
        airPortTranslations: originAirPortTranslations
    } = originAirPort || {};

    const {
        iataCode: destIataCode,
        airPortTranslations: distAirPortTranslations
    } = destAirPort || {};


    const {
        country: destCountry,
        city: destCity,
        airPortName: destAirPortName
    } = distAirPortTranslations?.find(a => a.languageCode === i18n.language) || {};



    const {
        country,
        city,
        airPortName: originAirPortName
    } = originAirPortTranslations?.find(a => a.languageCode === i18n.language) || {};


    return {
        origin: {
            id: origin_id,
            iataCode,
            city,
            country,
            originAirPortName: originAirPortName
        },
        destination: {
            id: destination_id,
            iataCode: destIataCode,
            city: destCity,
            country: destCountry,
            destenationAirPortName: destAirPortName
        },
        date: formatDateReadble(date),
        dateReturn: formatDateReadble(date_return),
        flighttype

    };
};

export default useFlightRouteDetails;
