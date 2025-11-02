
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

                <div className='info-text-container mb-5'>
                    <h3 className='mb-3'>Schema</h3>
                    <p><b>📍 Fredag – Välkomstkväll</b></p>

                    <div className='info-text-section'>
                        <p>
                            Ni gäster är varmt välkomna redan på fredagen! Då kan ni checka in i er stuga på Ramsvik Stugby, där helgens firande kommer att äga rum.
                        </p>
                        <p>
                            Fredagen har inget strikt schema, utan vi vill att ni gör det som passar er bäst. Incheckning i stugorna sker från kl 15:00. Därefter har ni möjlighet att utforska det vackra naturreservatet, ta en tur till Smögen för att kolla in de färgglada sjöbodarna eller bara ta det lugnt i stugan.
                        </p>
                        <p>Gällande middag så gör ni det ni känner för. Hunnebostrand och Smögen har trevliga restauranger, men vill man stanna i Ramsvik så har även stugbyn en trevlig restaurang som ni kan nyttja. Glöm inte att boka bord i samband med incheckning.</p>
                        <p>Under fredagskvällen kommer vi även att boka bastun för våra gäster, så om ni vill nyttja den och ta sig ett dopp är det fritt fram att göra det.</p>
                    </div>

                    <p>
                        <b>💍 Lördag – Bröllopsdagen</b>
                    </p>
                    <div className='info-text-section'>
                        <p>
                            För våra övernattande gäster serveras frukost i Ramsviks restaurang. Notera att ni behöver lägga till frukost i samband med er bokning.
                        </p>

                        <p>
                            13:00 – Vigsel i Hunnebostrands kyrka, ca 10 min med bil från Ramsvik.
                        </p>
                        <p>
                            Efter ceremonin smiter vi iväg för fotografering, medan ni gäster återvänder till Ramsvik för fri hopp och lek. Förslagsvis kan ni passa på att ta en fördrink i era stugor.
                        </p>
                        <p>
                            16:00 – Vi samlas för mingel och brudskål.
                        </p>

                        <p>
                            17:30 – Middag och fest! Vi dansar och firar tillsammans fram till 02:30.
                            Därefter väntar era (förhoppningsvis sköna) sängar i era stugor.
                        </p>
                    </div>

                    <p>
                        <b>🌻 Söndag – Hejdå och hemfärd</b>
                    </p>
                    <div className='info-text-section'>
                        <p>
                            Vi rundar av helgen med frukost i restaurangen.
                        </p>
                    </div>
                </div>

                <div className='info-text-container mb-5'>
                    <div className='info-text-section'>
                        <h3 className='mb-3'>Ta dig hit</h3>
                        <p>
                            Man kan använda lite olika sätt att ta sig till Ramsviks Stugby. Det föreslagna sättet är ta bil då man slipper byten och man får möjlighet att utforska Smögen, Kungshamn och Hunnebostrand som ligger i närområdet. Om man inte tar bil går det bra att ta sig till Ramsvik genom en kombination av tåg, buss och taxi.
                        </p>

                        <p className='mt-4'><b>🚈 + 🚕 Tåg och Taxi </b></p>
                        <p>
                            För resa med tåg och taxi har man möjlighet att ta ett direkttåg från Göteborg till Dingle Station. Från Dingle Station får man sen ta en taxi till Ramsviks Stugby (ca 30 min).
                        </p>

                        <p className='mt-4'><b>🚌 + 🚕 Buss och Taxi</b></p>
                        <p>
                            Under våren/sommaren går en direktbuss från Göteborg till Hunnebotorget. Därefter tar man enklast en taxi till Ramsviks stugby (ca 15 min)
                        </p>

                        <i>Notera att tidtabellerna för buss/direkttåg ännu inte släppts för våren/sommaren 2026, så håll utkik på Västtrafiks reseplanerare för dessa resealternativ</i>

                        <a href="https://www.vasttrafik.se/" target='_blank' className='btn mt-4 mb-3'>Västtrafik</a>
                        <a href="https://taxibokning.se/i/sotenaes/" target='_blank' className='btn mt-2 mb-3'>Taxibokning Sotenäs</a>
                        <a href="https://www.taxitjanst-sotenas.se/" target='_blank' className='btn mt-3 mb-5'>Taxitjänst Sotenäs</a>

                        <p className='mt-4'><b>🚙 Bil</b></p>
                        <p>
                            Kör på E6. Tag av mot Smögen (avfart nr 101, ca 10 mil norr om Göteborg). Följ alla skyltar mot Smögen. När ni har 7 km kvar till Smögen, tag av höger mot Ramsvik. Kör över bron, tag höger efter bron. Efter ca 2 km ligger Ramsvik Stugby & Camping på höger sida.

                            <br />
                            <br />
                            För dig som kör elbil så finns det elbilsladdning på området.

                            <a target='_blank' className='btn mt-4 mb-3' href='https://www.google.com/maps/place//data=!4m2!3m1!1s0x4645b0b050f62ac3:0xe38cfbf8c07f3726?sa=X&ved=1t:8290&ictx=111'>Öppna adress i Maps</a>
                        </p>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Info;