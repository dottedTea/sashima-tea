const enableScroll = () => {
	document.body.style.overflow = "auto";
	document.body.style.height = "auto";
};

const disableScroll = () => {
	document.body.style.overflow = "hidden";
	document.body.style.height = "100vh";
};

export { enableScroll, disableScroll };
