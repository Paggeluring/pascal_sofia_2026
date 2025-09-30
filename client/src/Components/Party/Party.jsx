
const ToastCard = ({ name = "Namn", image = "/img/anton.png" }) => {
    return (
        <div className='toast-card mb-5'>
            <div className='w-100 d-flex justify-content-center'>
                <img src={image} alt={name} className='toast-card-image mx-0' />
            </div>
        </div>
    );
};

export default ToastCard;