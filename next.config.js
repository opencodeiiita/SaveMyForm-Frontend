/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    images: {
        domains: [""],
    },
    webpack: (config) => {
        // this will override the experiments
        config.experiments = {
            ...config.experiments,
            ...{ topLevelAwait: true },
        };
        // this will just update topLevelAwait property of config.experiments
        // config.experiments.topLevelAwait = true
        return config;
    },
};

module.exports = nextConfig;
