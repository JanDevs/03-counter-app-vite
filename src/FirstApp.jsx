
const newMessage = {
    message: 'Hola Mundo',
    title: 'Jan',
};

const mensaje = () => {
    return "Holis";
}

export const FirstApp = ( { title, subtitle } ) => {

    //console.log(props);

    return(
        <>
            <h1> { title } </h1>
            <h2> { subtitle + 2 } </h2>
            
        </>
        
    );
}