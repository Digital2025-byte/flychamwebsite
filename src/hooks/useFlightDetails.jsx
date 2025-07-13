const useFlightDetails = (selectedType) => {
    const {
        type,
        transaction_id,
        connection_time,
        total_fare,
        total_fare_USD,
        round,
        pricing_info,
        Business, Economy
    } = selectedType || {};
    const info = type === "Business" ? Business : Economy

    return {
        type,
        transaction_id,
        connection_time,
        total_fare,
        total_fare_USD,
        round,
        pricing_info,
        info
    };
};

export default useFlightDetails;
