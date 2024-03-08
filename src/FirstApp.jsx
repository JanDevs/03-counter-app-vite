
const newMessage = {
    message: 'Hola Mundo',
    title: 'Jan',
};

const mensaje = () => {
    return "Holis";
}

export const FirstApp = () => {

    

    return(
        <>
            <h1> { JSON.stringify( newMessage ) } </h1>
            <h3> { newMessage.message } </h3>
            <h4> { newMessage.title } </h4>
            <h4> { mensaje() } </h4>
            <p>Soy un subtítulo</p>
        </>
        
    );
}