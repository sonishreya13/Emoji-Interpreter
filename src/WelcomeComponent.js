function WelcomeComponent(props){
    console.log(props);
    return (
        <div>
     
         <h1>{props.name}</h1>
         <h1>{props.batch}</h1>

        </div>
    )
}
export default WelcomeComponent;