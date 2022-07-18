import classes from './Button.module.css'



const Button = dataProps => {



	return (

<button
 type={ dataProps.type }
 className={ classes.button }
 onClick={ dataProps.onClick }
>



 { dataProps.children }



</button>

	)



}



export default Button
