const Button = function({label, type, eventHandler}) {
	const colorClass = {
		operator: ["bg-keyOperator", "text-key", "shadow-key", "active:bg-white"],
		equal: ["bg-keyEqual", "text-equal", "shadow-equal", ""],
		clear: ["bg-keyClear", "text-clear", "shadow-clear", ""],
	}

	return (
		<input 
			type="button" 
			value={label} 
			className={`
				transition-all
				w-full 
				font-bold 
				rounded-xl 
				h-[60px] 
				text-3xl 
				cursor-pointer 
				${colorClass[type][0]} 
				${colorClass[type][1]} 
				${colorClass[type][2]} 
				${colorClass[type][3]}`} 
			onClick={() => eventHandler(label)}/>
	);
}

export default Button;