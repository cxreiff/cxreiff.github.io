module.exports = {
    "*.{ts,tsx}": [
        () => "npm run tsc",
        () => "npm run lint",
        () => "npm run jest",
    ]
}
