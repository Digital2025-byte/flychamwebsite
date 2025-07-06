import { AirplaneTilt, ArrowsClockwise, Briefcase, CheckCircle, EyeSlash, SuitcaseSimple, XCircle } from '@phosphor-icons/react';
import React from 'react';

const FeatureRow = ({ item }) => {
    const { icon: Icon, label, iconColor } = item
    return ((
        <div className="flex items-center gap-3 text-[#000] text-sm">
            <Icon size={20} className={`${iconColor}`} />
            {label}
        </div>
    ))
}


const featureItems = [
    { icon: SuitcaseSimple, label: 'Checked baggage', iconColor: 'text-black', },
    { icon: Briefcase, label: 'Hand baggage', iconColor: 'text-black', },
    { icon: AirplaneTilt, label: 'Earned Miles', iconColor: 'text-black', },
    { icon: ArrowsClockwise, label: 'Flight change', iconColor: 'text-black', },
    { icon: XCircle, label: 'Cancellation', iconColor: 'text-black', },
    { icon: EyeSlash, label: 'No show policy', iconColor: 'text-black', },
];
const economyClassItems = [
    {
        icon: CheckCircle,
        iconColor: 'text-green',
        label: '30 kg',
    },
    {
        icon: CheckCircle,
        iconColor: 'text-green',
        label: '1 piece, 7 kg',
    },
    {
        icon: CheckCircle,
        iconColor: 'text-green',
        label: '1050',
    },
    {
        icon: CheckCircle,
        iconColor: 'text-green',
        label: 'Change with Fee',
    },
    {
        icon: XCircle,
        iconColor: 'text-alert',
        label: 'Non- Refundable',
    },
    {
        icon: CheckCircle,
        iconColor: 'text-green',
        label: 'USD 250',
    },
];
const InfoRows = ({ items }) => {
    return (
        <div className="flex flex-col gap-3 w-full  self-end">
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <FeatureRow item={item} />
                    {index < items.length - 1 && (
                        <div className="h-px bg-300 " />
                    )}
                </React.Fragment>
            ))}

        </div>
    )
}
const Header = ({ tag, price, title, isEconomy, isHeader }) => {
    if (!isHeader) {
        return <div className="h-[88px] px-4 py-2" />; // or h-[104px] depending on spacing
    }

    const bgColor = isEconomy ? 'bg-[rgba(var(--primary-1-rgb),0.2)]' : 'bg-primary-1';
    const textColor = isEconomy ? 'text-primary-1' : 'text-white';
    const textCurrencyColor = isEconomy ? 'text-black' : 'text-white';
    return (
        <div className={` relative flex items-center justify-between px-4 py-2 ${bgColor}`}>
            <div>
                <span className={`text-sm font-semibold ${textColor}`}>{title}</span>

                <div className={`${textCurrencyColor}`}>
                    <div className={`${textCurrencyColor} text-xs font-medium  `}>USD</div>
                    <div className={`${textCurrencyColor} text-2xl font-regular`}>{price.replace('USD ', '')}</div>
                </div>
            </div>

            {tag && (
                <span className="absolute right-0 top-0 bg-secondary-1 text-white text-[10px] p-3 font-regular rounded-bl-[12px]">
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
    items
}) => {
    const isEconomy = type === 'Economy';


    return (
        <div className=" w-full max-w-[280px] flex flex-col  rounded-lg ">

            <Header tag={tag} price={price} title={title} isEconomy={isEconomy} isHeader={isHeader} />

            {isHeader ? (
                <div className="text-alert text-xs font-medium text-end mb-2">{seatsLeft}</div>
            ) : (
                <div className="h-[16px] mb-2"></div>
            )}

            <InfoRows
                items={items}
            />

            {/* <div className="text-[#3A3A36] text-sm text-center pb-1">{noShow}</div> */}
            {/* <button className={`w-full py-2 text-sm font-semibold ${isEconomy ? 'text-[#002C5F] border border-[#002C5F]' : 'bg-[#002C5F] text-white'} rounded-b-lg`}>Select</button> */}
        </div>
    );
};

const FlightDetails = () => {
    return (
        <div className="w-full  p-6 rounded-xl flex flex-col md:flex-row gap-6 justify-between items-end">

            <div className="flex flex-col md:flex-row gap-4 flex-1">
                <FareColumn
                    title="Economy Class"
                    price="USD 550"
                    seatsLeft="2 seats left"
                    baggage="30 kg"
                    handBaggage="1 piece, 7 kg"
                    miles="1050"
                    changePolicy="Change with Fee"
                    refundPolicy="Non-Refundable"
                    noShow="USD 250"
                    type="Economy"
                    items={featureItems}

                />
                <div className='flex flex-1 justify-start  gap-4'>


                    <FareColumn
                        title="Economy Class"
                        price="USD 550"
                        seatsLeft="2 seats left"
                        baggage="30 kg"
                        handBaggage="1 piece, 7 kg"
                        miles="1050"
                        changePolicy="Change with Fee"
                        refundPolicy="Non-Refundable"
                        noShow="USD 250"
                        type="Economy"
                        isHeader
                        items={economyClassItems}

                    />

                    <FareColumn
                        title="Business Class"
                        price="USD 900"
                        seatsLeft="4 seats left"
                        baggage="40 kg"
                        handBaggage="1 piece, 7 kg"
                        miles="2500"
                        changePolicy="Flexibility changes"
                        refundPolicy="Full Refund"
                        noShow="USD 150"
                        tag="Recommended"
                        type="Business"
                        isHeader
                        items={economyClassItems}
                    />
                </div>
            </div>
        </div>
    );
};

export default FlightDetails; 