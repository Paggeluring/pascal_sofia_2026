
const ToastCard = ({ name, image, description, email }) => {
    return (
        <div className='toast-card mb-5'>
            <div className='w-100 d-flex justify-content-center'>
                <img src={image} alt={name} className='toast-card-image mx-0' />
            </div>
            <div className='toast-card-info'>
                <h3 className='mb-3'>{name}</h3>
                <p>{description}</p>
                <p><b>Email:</b> {email}</p>
            </div>
        </div>
    );
};

export default ToastCard;