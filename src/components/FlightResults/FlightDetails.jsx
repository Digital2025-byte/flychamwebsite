import useIsMobile from '@/hooks/useIsMobile';
import { AirplaneTilt, ArrowsClockwise, Briefcase, CheckCircle, EyeSlash, SuitcaseSimple, XCircle } from '@phosphor-icons/react';
import React from 'react';

const FeatureRow = ({ index, item, isLg, featureItems }) => {
    const { icon: Icon, value, iconColor, label } = item;

    return (
        <div className="flex flex-row-reverse justify-between lg:justify-start lg:flex-row items-center gap-3 text-[#000] text-sm">
            <Icon size={20} className={`${iconColor}`} />
            {!isLg ? `${label}: ${value}` : value}
        </div>
    );
};



const featureItems = [
    { icon: SuitcaseSimple, value: 'Checked baggage', iconColor: 'text-black', },
    { icon: Briefcase, value: 'Hand baggage', iconColor: 'text-black', },
    { icon: AirplaneTilt, value: 'Earned Miles', iconColor: 'text-black', },
    { icon: ArrowsClockwise, value: 'Flight change', iconColor: 'text-black', },
    { icon: XCircle, value: 'Cancellation', iconColor: 'text-black', },
    { icon: EyeSlash, value: 'No show policy', iconColor: 'text-black', },
];
const economyClassItems = [
    {
        icon: CheckCircle,
        iconColor: 'text-green',
        value: '30 kg',
        label: 'Checked baggage',
    },
    {
        icon: CheckCircle,
        iconColor: 'text-green',
        value: '1 piece, 7 kg',
        label: 'Hand baggage',
        label: 'Earned Miles',
    },
    {
        icon: CheckCircle,
        iconColor: 'text-green',
        value: '1050',
        label: 'Flight change',
    },
    {
        icon: CheckCircle,
        iconColor: 'text-green',
        value: 'Change with Fee',
        label: 'Cancellation',
    },
    {
        icon: XCircle,
        iconColor: 'text-alert',
        value: 'Non- Refundable',
        label: 'No show policy',
    },
    {
        icon: CheckCircle,
        iconColor: 'text-green',
        value: 'USD 250',
        label: '',
    },
];
const InfoRows = ({ items, isHeader, isEconomy, isLg }) => {
    return (
        <div className="flex flex-col gap-3 w-full  self-end">
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <FeatureRow index={index} item={item} isLg={isLg} featureItems={featureItems} />
                    {index < items.length - 1 && (
                        <div className="h-px bg-300 " />
                    )}
                </React.Fragment>
            ))}
            {(isHeader && !isLg) && (
                <button
                    className={`cursor-pointer w-full py-2 text-sm font-semibold rounded-[6px] ${isEconomy
                        ? 'text-primary-1 border border-[var(--primary-1)] bg-white'
                        : 'text-white bg-[var(--primary-1)]'
                        }`}
                >
                    Select
                </button>
            )}

        </div>
    )
}
const Header = ({ tag, price, title, isEconomy, isHeader, isLg }) => {
    console.log('Header', !isHeader && !isLg);
    // Don't show anything on mobile if not header
    if (!isHeader && !isLg) {
        return null;
    }

    // Show spacer only on large screens if not header
    if (!isHeader && isLg) {
        return <div className="h-[88px] px-4 py-2" />;
    }


    const bgColor = isEconomy ? 'bg-[rgba(var(--primary-1-rgb),0.2)]' : 'bg-primary-1';
    const textColor = isEconomy ? 'text-primary-1' : 'text-white';
    const textCurrencyColor = isEconomy ? 'text-black' : 'text-white';
    return (
        <div className={`relative flex items-center justify-between px-4 py-2 ${bgColor} rounded-tl-[8px] rounded-t-[8px]`}>
            <div>
                <span className={`text-sm font-semibold ${textColor}`}>{title}</span>

                <div className={`${textCurrencyColor}`}>
                    <div className={`${textCurrencyColor} text-xs font-medium  `}>USD</div>
                    <div className={`${textCurrencyColor} text-2xl font-regular`}>{price.replace('USD ', '')}</div>
                </div>
            </div>

            {tag && (
                <span className="absolute right-0 top-0 bg-secondary-1 text-white text-[10px] p-2 font-semibold rounded-bl-[12px] rounded-tr-[8px]">
                    {tag}
                </span>
            )}
        </div>
    )
}

const FareColumn = ({
    title,
    price,
    seatsLeft,
    baggage,
    handBaggage,
    miles,
    changePolicy,
    refundPolicy,
    noShow,
    tag = '',
    type,
    isHeader,
    items, isLg, featureItems
}) => {
    const isEconomy = type === 'Economy';


    return (
        <div className=" w-full lg:max-w-[280px] flex flex-col  rounded-lg ">

            <Header tag={tag} price={price} title={title} isEconomy={isEconomy} isHeader={isHeader} isLg={isLg} />

            {(isHeader && isLg) ? (
                <div className="text-alert text-xs font-medium text-end mb-2">
                    {seatsLeft}
                </div>
            ) : null}


            <InfoRows
                items={items}
                isHeader={isHeader}
                isEconomy={isEconomy}
                isLg={isLg}
                featureItems={featureItems}
            />

            {/* <div className="text-[#3A3A36] text-sm text-center pb-1">{noShow}</div> */}
            {/* <button className={`w-full py-2 text-sm font-semibold ${isEconomy ? 'text-[#002C5F] border border-[#002C5F]' : 'bg-[#002C5F] text-white'} rounded-b-lg`}>Select</button> */}
        </div>
    );
};

const FlightDetails = () => {
    const isLg = !useIsMobile(1024)
    const columns = [
        {
            title: 'Economy Class',
            price: 'USD 550',
            seatsLeft: '2 seats left',
            baggage: '30 kg',
            handBaggage: '1 piece, 7 kg',
            miles: '1050',
            changePolicy: 'Change with Fee',
            refundPolicy: 'Non-Refundable',
            noShow: 'USD 250',
            type: 'Economy',
            items: featureItems,

        },
        {
            title: 'Economy Class',
            price: 'USD 550',
            seatsLeft: '2 seats left',
            baggage: '30 kg',
            handBaggage: '1 piece, 7 kg',
            miles: '1050',
            changePolicy: 'Change with Fee',
            refundPolicy: 'Non-Refundable',
            noShow: 'USD 250',
            type: 'Economy',
            isHeader: true,
            items: economyClassItems,
            featureItems: featureItems,

            isBtn: true,
        },
        {
            title: 'Business Class',
            price: 'USD 900',
            seatsLeft: '4 seats left',
            baggage: '40 kg',
            handBaggage: '1 piece, 7 kg',
            miles: '2500',
            changePolicy: 'Flexibility changes',
            refundPolicy: 'Full Refund',
            noShow: 'USD 150',
            tag: 'Recommended',
            type: 'Business',
            isHeader: true,
            items: economyClassItems,
            featureItems: featureItems,
            isBtn: true,
        },
    ];

    return (
        <div className="w-full  p-6 rounded-xl flex flex-col md:flex-row gap-6 justify-between items-end">

            <div className="flex flex-col lg:flex-row w-full   gap-4 flex-1">
                {isLg &&
                    <FareColumn {...columns[0]} isLg={isLg} />
                }

                <div className="flex flex-col md:flex-row gap-4 flex-1">
                    <div className="flex flex-col lg:flex-row flex-1 justify-start gap-4">
                        {columns.slice(1).map((col, idx) => (
                            <FareColumn key={idx + 1} {...col} isLg={isLg} featureItems={featureItems} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightDetails; 