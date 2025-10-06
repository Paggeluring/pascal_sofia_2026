const Text = ({ header, text }) => {
    return (

        <div className="container mt-5 px-4">
            <h2 className='mb-4'>{header}</h2>
            <p>{text}</p>
        </div>
    );
};

export default Text;