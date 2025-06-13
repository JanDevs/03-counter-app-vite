import PropTypes from 'prop-types';

const FirstApp = ( { 
    title = "No hay titulo", 
    subtitle = "La tierra explota" } ) => {
  
  // console.log(props);

  return (
  <>
    <h1>{ title}</h1>
    {/* <h1>{ JSON.stringify( newMessage ) }</h1> */}
    <p>{ subtitle }</p>
  </>

  )
}

export default FirstApp

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number,
}
