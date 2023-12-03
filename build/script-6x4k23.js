
				{
					__sveltekit_fcdzw3 = {
						base: new URL(".", location).pathname.slice(0, -1),
						env: {}
					};

					const element = document.currentScript.parentElement;

					const data = [null,null];

					Promise.all([
						import("./app/immutable/entry/start.0cd95cbf.js"),
						import("./app/immutable/entry/app.3e88c51a.js")
					]).then(([kit, app]) => {
						kit.start(app, element, {
							node_ids: [0, 2],
							data,
							form: null,
							error: null
						});
					});
				}
			