

const FirstApp = ( { title, subtitle } ) => {
  
  // console.log(props);

  return (
  <>
    <h1>{ title}</h1>
    {/* <h1>{ JSON.stringify( newMessage ) }</h1> */}
    <p>{ subtitle + 1 }</p>
  </>

  )
}

export default FirstApp
