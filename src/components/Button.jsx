const Button = function(props) {
	const colorClass = {
		operator: ["bg-keyOperator", "text-key", "shadow-key", "active:bg-white"],
		equal: ["bg-keyEqual", "text-equal", "shadow-equal", ""],
		clear: ["bg-keyClear", "text-clear", "shadow-clear", ""],
	}

	console.log(colorClass[props.type][1])
	return (
		<input 
			type="button" 
			value={props.label} 
			className={`
				transition-all
				w-full 
				focus:bg-white 
				font-bold 
				rounded-xl 
				h-[60px] 
				text-3xl 
				cursor-pointer 
				${colorClass[props.type][0]} 
				${colorClass[props.type][1]} 
				${colorClass[props.type][2]} 
				${colorClass[props.type][3]}`} />
	);
}

export default Button;