import './Toast.css';


const CircleImage = ({ src = '/img/anton.png', alt = 'Toast' }) => {
    return (
        <div className='circle-image-circle'>
            <img src={src} alt={alt} className='circle-image-fit' />
        </div>
    );
};

export default CircleImage;