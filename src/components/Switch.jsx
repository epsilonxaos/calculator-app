const Switchs = ({label, theme, eventHandler}) => {
	return (
		<>
			<input type="radio" id={`theme-${label}`} name="theme" defaultChecked={label == 1 ? true : false} onClick={() => eventHandler(theme)} />
			<label htmlFor={`theme-${label}`} className="after:text-texts bg-toggle before:bg-keyEqual" data-title={label}></label>
		</>
	);
}

export default Switchs;