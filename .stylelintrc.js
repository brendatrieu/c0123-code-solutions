module.exports =
{
  "extends": [
    "stylelint-config-recommended",
    "stylelint-config-standard"
  ],
  "rules": {
    "no-empty-source": null,
    // Modify name pattern rules to accommodate Create React App conventions
    "selector-class-pattern": [
      "^([A-Za-z][a-z0-9]*)(-[a-z0-9]+)*$",
      {
        "message": (selector) => `Expected class selector "${selector}" to be kebab-case`,
      },
    ],
      "keyframes-name-pattern": [
        "^([A-Za-z][a-z0-9]*)(-[a-z0-9]+)*$",
        {
          "message": (name) => `Expected keyframe name "${name}" to be kebab-case`,
        },
      ],
  },
}
