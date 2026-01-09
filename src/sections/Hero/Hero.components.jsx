import { useState } from "react";
import { DETAILS_ITEMS, DOCTORS_LIST, MODAL_ITEMS, NEW_YEARS_SALE, SALE_ITEMS } from "./Hero.constants";
import ReactParser from "html-react-parser";
import { RiSubtractLine } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import classNames from "classnames";
import TextIcon from "../../components/common/TextIcon";
import { LiaShippingFastSolid } from "react-icons/lia";
import { SlRefresh } from "react-icons/sl";
import { CiClock2 } from "react-icons/ci";

export const ModalItems = () => {
    const [itemId, setItemId] = useState('');
    return (
        <>
            {
                MODAL_ITEMS.map(({ id, title, content }) => (
                    <div key={id} className="px-6">
                        <div className="flex justify-between items-center h-14 cursor-pointer" onClick={() => setItemId((itemId) => itemId === id ? '' : id)}>
                            <p className="text-dark-gray text-[18px] font-medium">{title}</p>
                            <button >{itemId === id ?
                                <div className="size-8 p-[9px] rounded-full bg-[#eee]">
                                    <RiSubtractLine className="size-3.5 text-dark-gray" />
                                </div> :
                                <div className="size-8 p-[9px] rounded-full bg-[#eee]">
                                    <AiOutlinePlus className="size-3.5" fill="#121212" />
                                </div>}</button>
                        </div>

                        {
                            itemId === id && (
                                <p className="text-[#424242] pr-10">{ReactParser(content)}</p>
                            )
                        }
                    </div>
                ))
            }
        </>
    )
}

export const DoctorsList = ({ onDoctorClick }) => {
    return (
        <div className="pt-6 space-y-6">
            {
                DOCTORS_LIST.map(({ name, avtUrl, location }) => (
                    <div key={name} className="flex items-center justify-between text-dark-gray font-medium leading-[18px]">
                        <div className="flex items-center gap-3 cursor-pointer">
                            <img src={avtUrl} alt={name} className="size-10.5 rounded-2xl bg-[#eee]" />

                            <div className="space-y-1 whitespace-nowrap text-ellipsis overflow-hidden">
                                <p className="underline">{name}</p>
                                <p className="text-[14px] text-[#565656]">{location}</p>
                            </div>
                        </div>

                        <button className="flex items-center gap-2 bg-[#eee] text-[14px] px-4 py-2.5 rounded-full whitespace-nowrap hover:bg-[#E0E0E0] duration-200 transition-colors">
                            <p>Preview</p> <BiLinkExternal />
                        </button>
                    </div>
                ))
            }
        </div>
    )
}

export const Sale = () => {
    const [selectedOption, setSelectedOption] = useState(2);
    return (
        <div className="mt-3 font-nunito">
            <div className="bg-[#f3eee0] rounded-lg p-3 space-y-3">
                {
                    SALE_ITEMS.map(({ id, name, desc, price, oldPrice }) => (
                        <div key={id} className={classNames('relative bg-white rounded-xl border border-[#039869] cursor-pointer')} onClick={() => setSelectedOption(id)}>
                            {
                                id === 2 && <div className="absolute top-0 -right-2 -translate-y-1/2">
                                    {NEW_YEARS_SALE}
                                </div>
                            }

                            <div className="p-4 flex items-center gap-3">
                                <div className="size-6.5 rounded-full border-2 border-[#039869] flex items-center justify-center">
                                    <div className={classNames("size-4 rounded-full scale-0 transition-transform peer-checked:scale-100", selectedOption === id && "bg-[#039869] scale-100")} />
                                </div>

                                <div>
                                    <p className="font-semibold">{name}</p>
                                    <p className="text-[12px]">{desc}</p>
                                </div>

                                <div className="text-right ml-auto">
                                    <p className="font-semibold">{price}</p>
                                    <p className="text-[14px] opacity-75 line-through font-montserrat">{oldPrice}</p>
                                </div>
                            </div>

                            <div className={classNames("*:bg-[#039869] *:border-b *:border-white *:last:border-0 *:last:rounded-b-xl text-[12px] font-bold", selectedOption !== id && 'opacity-60')}>
                                <TextIcon urlIcon={'https://trysculptique.com/cdn/shop/files/delivery-truck_181581.png?v=1749555916'} text={'Free USA Shipping'} className={'py-1 px-2'} textCustom={'text-white'} iconCustom={'w-8!'} />
                                {id !== 1 && <TextIcon urlIcon={'https://trysculptique.com/cdn/shop/files/download_5307610.png?v=1749555943'} text={'Free Anti-Bloating Protocol E-book'} className={'py-1 px-2'} textCustom={'text-white'} iconCustom={'w-8!'} />}
                                {id === 3 && <TextIcon urlIcon={'https://trysculptique.com/cdn/shop/files/Kaching-Bundles-Kaching-Bundles-Kaching-Bundles-gift-card_18054896_300x300_300x300_72117561-797d-4e48-9491-3bc1748ce974.png?v=1749556309'} text={'$20 Gift Card'} className={'py-1 px-2'} textCustom={'text-white'} iconCustom={'w-8!'} />}
                            </div>
                        </div>
                    ))
                }

            </div>

            <div className="mt-4 flex items-center gap-2">
                <LiaShippingFastSolid className="text-[20px] lg:text-[2vw]" />
                <p className="max-mobile-sm:text-[12px]">Delivered on <span className="rounded bg-[#039869] text-white px-2 py-1">Tuesday, 13 January</span> with Express Shipping</p>
            </div>

            <button className="font-montserrat rounded-lg bg-black text-white text-[18px] font-bold p-3 text-center mt-3 w-full hover:opacity-80 transition-opacity duration-200">ADD TO CART</button>

            <div className="flex items-center justify-center gap-4 mt-4">
                <div className="flex items-center justify-center gap-2 border-r border-black pr-4">
                    <SlRefresh className="max-mobile-sm:text-[14px] text-[20px] shrink-0" />
                    <p className="max-mobile-sm:text-[12px]">Refills Ship Bi-Monthly</p>
                </div>

                <div className="flex items-center justify-center gap-2">
                    <CiClock2 className="max-mobile-sm:text-[14px] text-[20px] shrink-0" />
                    <p className="max-mobile-sm:text-[12px]">Stop or Cancel Anytime</p>
                </div>
            </div>

            <div className="my-4">
                <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003454.png?v=1752066654" alt="payment methods" className="w-full" />
            </div>

            <div className="mb-3">
                <img src="https://trysculptique.com/cdn/shop/files/CTA_Button_Add_To_Cart_8b5e7dd2-d716-4b24-a339-d8f27d86e61a.png?v=1766758486" alt="" className="w-full" />
            </div>

            <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                    <div className="w-[5%]">
                        <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/60-days_11622780_1.png?v=1752066864" alt="" />
                    </div>
                    <p>60-Day Money-Back Guarantee</p>
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-[5%]">
                        <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_1000003293.png?v=1752066864" alt="" />
                    </div>
                    <p>Free Shipping From USA Included</p>
                </div>
            </div>
        </div>
    )
}

export const Review = () => {
    return (
        <div className="mt-6 bg-[#f3eee0] rounded-xl p-3 space-y-2">
            <div className="flex items-center gap-4">
                <div className="w-[15%]">
                    <img src="https://trysculptique.com/cdn/shop/files/AI_Nurse_Holding_TORC_2_efcbd677-7242-4cb2-9f99-ad1e3726b19b.png?v=1752500889" alt="" className="" />
                </div>

                <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                        <p>Margaret Ellison | FL</p>
                        <div>
                            <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_7966.png?v=1752068267" alt="" className="max-w-30" />
                        </div>
                    </div>

                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/stars-4.5_1.png?v=1752068267" alt="" className="max-w-25" />
                    </div>
                </div>
            </div>

            <p className="font-semibold tracking-[0]">Even my husband noticed... the spark came back.</p>

            <p className="tracking-[0]">After years of hiding under coverups, picking apart my body, and feeling disconnected, I finally feel at ease again. I feel less bloated, lighter, like my body is working with me not against me. These past months, I’ve been present. Even my marriage feels renewed, not just in how I look but in how I feel. It’s hard to explain, but once you try it you’ll get it. I’d recommend this to my closest friends without question.</p>
        </div >
    )
}

export const MoreDetails = () => {
    const [selectedDetail, setSelectedDetail] = useState([]);

    const handleSelectDetail = (id) => {
        if (selectedDetail.includes(id)) {
            setSelectedDetail(selectedDetail.filter((item) => item !== id));
        } else {
            setSelectedDetail([...selectedDetail, id]);
        }
    }

    return (
        <div className="space-y-4">
            {
                DETAILS_ITEMS.map(({ id, title, desc }) => (
                    <div key={id} className={classNames("border rounded-4xl p-4 cursor-pointer", selectedDetail.includes(id) ? "border-[#039869]" : "border-[#d2d2d2]")} onClick={() => handleSelectDetail(id)}>
                        <div className=" flex items-center justify-between">
                            <p>{title}</p>
                            <div>
                                <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Button_To_Expand_1_8a6027c0-281a-4c6b-8881-60673c7255ec.png?v=1758716844" alt="" className={classNames("w-6 transition-transform duration-200", selectedDetail.includes(id) && 'rotate-45')} />
                            </div>
                        </div>

                        {
                            selectedDetail.includes(id) && (
                                <div className="pt-4">{ReactParser(desc)}</div>
                            )
                        }
                    </div>
                ))
            }
        </div >
    )
}