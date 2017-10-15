module.exports = {
    "env": {
        "browser": true
    },
    "extends": [
        "airbnb", 
        "prettier", 
        "prettier/react"
    ],
    "plugins": [
        "prettier"
    ],
    "rules": {
        "prettier/prettier": "error",
        "comma-dangle": ["error", "never"],
        "prefer-template": ["off"], 
        "react/jsx-filename-extension": ["off"],
        "semi": ["error", "never"]
    }
};