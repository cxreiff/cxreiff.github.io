module.exports = {
    "*.{ts,tsx}": [
        () => "npm run tsc",
        () => "npm run jest",
        () => "npm run lint",
    ]
};
