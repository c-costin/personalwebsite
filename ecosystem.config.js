module.exports = {
    apps: [
        {
            name: "app_costincadeau",
            script: "build/index.js",
            env_production: {
				PORT: 50100
			}
        },
    ],
};
