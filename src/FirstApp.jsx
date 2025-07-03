import PropTypes from 'prop-types';

const FirstApp = ( { 
    title = "No hay titulo", 
    subtitle = "La tierra explota",
    name = "Jan" } ) => {
  
  // console.log(props);

  return (
  <>
    <div data-testid="test-title" >{ title }</div>
    {/* <h1>{ JSON.stringify( newMessage ) }</h1> */}
    <p>{ subtitle }</p>
    <p>{ name }</p>
  </>

  )
}

export default FirstApp

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number,
}
