
const ToastCard = ({ name = "Namn", image = "/img/anton.png", description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," }) => {
    return (
        <div className='toast-card mt-5 mb-3'>
            <div className='w-100 d-flex justify-content-center'>
                <img src={image} alt={name} className='toast-card-image mx-0' />
            </div>
            <div className='toast-card-info'>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ToastCard;