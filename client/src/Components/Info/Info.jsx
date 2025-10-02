
import React from 'react';
import './Info.css';

const Info = () => {
    return (
        <div className='mt-5 container'>

            <div className='px-2'>
                <h2 className=''>🥂 Bröllopshelgen med oss</h2>

                <p className='mt-3'>
                    Vi ser så mycket fram emot att fira vår stora dag tillsammans med dig – och vi vill göra det till en hel helg att minnas! Här hittar du schemat för festligheterna:
                </p>
            </div>

            <div className='mt-4 px-2'>
                <div className='info-text-container'>
                    <p><b>📍 Fredag – Välkomstkväll</b></p>

                    <div className='info-text-section'>
                        <p>
                            Ni gäster är varmt välkomna redan på fredagen! Då kan ni checka in i valfri stuga på Ramsvik Stugby & Camping, där hela helgens firande kommer att äga rum.
                        </p>
                        <p>
                            Under dagen finns möjlighet att utforska det vackra naturreservatet, och på kvällen bjuder vi in till avslappnat mingel med bad och bastu för den som vill komma i stämning inför lördagen.
                        </p>
                    </div>

                    <p>
                        <b>💍 Lördag – Bröllopsdagen</b>
                    </p>
                    <div className='info-text-section'>
                        <p>
                            För våra övernattande gäster serveras frukost i Ramsviks restaurang.
                        </p>

                        <p>
                            13:00 – Vigsel i Hunnebostrands kyrka, ca 10 min med bil från Ramsvik.
                        </p>
                        <p>
                            Efter ceremonin smiter vi iväg för fotografering, medan ni gäster återvänder till Ramsvik för fri hopp och lek.
                        </p>
                        <p>
                            16:00 – Vi ses igen för mingel och brudskål.
                        </p>

                        <p>
                            17:30 – Middag och fest! Vi dansar och firar tillsammans fram till 02: 30.
                            Därefter väntar era (förhoppningsvis sköna) sängar i era stugor.
                        </p>
                    </div>

                    <p>
                        <b>🌞 Söndag – Hejdå och hemfärd</b>
                    </p>
                    <div className='info-text-section'>
                        <p>
                            Vi rundar av helgen med frukost i restaurangen.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Info;