module.exports = {
  extends: ["next/core-web-vitals"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "react-hooks/exhaustive-deps": "off", // If you're getting this warning
    "react/jsx-no-undef": "off", // For undefined JSX component warnings
    // Add other rules to disable here
  },
};
