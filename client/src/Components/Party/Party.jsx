import CircleImage from "../Toast/CircleImage";

const Party = () => {

    const partyPeople = [
        { name: 'Emma', title: 'Huvudtärna', image: '/img/emma.png' },
        { name: 'Christian', title: 'Marskalk', image: '/img/chrille.jpeg' },
        { name: 'Lotta', title: 'Tärna', image: '/img/lotta.png' },
        { name: 'Sebastian', title: 'Marskalk', image: '/img/sebbe.PNG' },
        { name: 'Anton', title: 'Tärna', image: '/img/anton.png' },
        { name: 'Anton', title: 'Marskalk', image: '/img/antonj.PNG' },
        { name: 'Frida', title: 'Tärna', image: '/img/frida.png' },
        { name: 'Love', title: 'Marskalk', image: '/img/love.png' },
        { name: 'Daniel', title: 'Marskalk', image: '/img/balogh.PNG' },
    ];

    return (
        <>
            <h2>Möt vårt härliga följe</h2>
            <div className='row'>
                {partyPeople.map((person, index) => (
                    <div key={index} className='col-6 col-md-4'>
                        <div className='toast-card mt-5'>
                            <div className='w-100 d-flex justify-content-center'>
                                <CircleImage src={person.image} />
                            </div>
                            <div className='mt-3 text-center'>
                                <h3>{person.name}</h3>
                                <p>{person.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Party;