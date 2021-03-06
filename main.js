window._config = {
	version: 1,
	noteLength: 100, // length each instrument should be in the playing state
	allowZeroDelay: false, // allow note delays of 0
	defaultDelay: 1000, // default delay for notes
	waitForNotes: false, // waits for a note to finish the playing state before starting the next delay
	pushVars: ['_config', '_data', '_util', 'InstrumentEnum', 'InstrumentPerKeyEnum', 'BongoSet', 'BongoSoundboard'], // variables to push to BongoComposer, you shouldnt need to change this
	forceDark: true, // forces dark theme (only use if you are on light theme)
	remote: `${window.location.protocol}//raw.githack.com/itzTheMeow/bonko/master`, // the remote to fetch scripts from
	pluginsDir: 'plugins', // the directory to get plugins from
};
!(async function () {
	// fetches and runs the script
	window.eval(await (await fetch(`${_config.remote}/index.js`)).text());
})();
