
import React from 'react';
import './Info.css';

const Info = () => {
    return (
        <div className='mt-5 container'>

            <div className='px-2'>
                <h2 className=''>🥂 Bröllopshelgen med oss</h2>

                <p className='mt-3'>
                    Vi ser så mycket fram emot att fira vår stora dag tillsammans med dig – och vi vill göra det till en hel helg att minnas! Nedan följer praktiskt information om boende, transport och schema för helgen.
                </p>
            </div>

            <div className='mt-4 px-2'>
                <div className='info-text-container mb-5'>
                    <div className='info-text-section'>
                        <h3 className='mb-3'>Boende</h3>
                        <p>Då vi kommer att ha festen i Ramsviks Stugby rekommenderar vi våra gäster att boka en stuga på området för att ha nära till alla festligheter. Ramsvik erbjuder ca 120st stugor i olika storlekar, med eller utan havsutsikt.</p>
                        <p>Boendet bokar ni själva, men för att Ramsvik ska kunna checka av våra gäster gentemot gästlistan ber vi er att ange <b>"Bröllop, Pascal och Sofia" i samband med bokningen. Länken för stugbokning finner ni nedan:</b></p>
                        <a href="https://boka.ramsvik.nu/accommodation?langid=1" target='_blank' className='btn mt-4'>Boka stugan här</a>
                    </div>
                </div>

                <div className='info-text-container'>
                    <h3 className='mb-3'>Schema</h3>
                    <p><b>📍 Fredag – Välkomstkväll</b></p>

                    <div className='info-text-section'>
                        <p>
                            Ni gäster är varmt välkomna redan på fredagen! Då kan ni checka in er stuga på Ramsvik Stugby, där helgens firande kommer att äga rum.
                        </p>
                        <p>
                            Fredagen har inget strikt schema, utan vi vill att ni gör det som passar er bäst. Incheckning i stugorna sker från kl 15:00. Därefter har man möjlighet att utforska det vacka naturreservatet, ta en tur till Smögen för att kolla in de färgglada sjöbodarna eller bara ta det lugnt i stugan.
                        </p>
                        <p>Gällande middag så gör ni det ni känner för. Hunnebostrand och Smögen har trevliga restauranger, men vill man stanna i Ramsvik så har även stugbyn en trevlig restaurang som man kan nyttja. Glöm inte att boka bord i samband med incheckning</p>
                        <p>Vi kommer att hålla till i restaurangen för lite avslappnat mingel.</p>
                        <p>Under fredagskvällen kommer vi även att boka bastun för våra gäster, så om man vill nyttja den och ta sig ett dopp är det fritt fram att göra det!</p>
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
                            17:30 – Middag och fest! Vi dansar och firar tillsammans fram till 02:30.
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