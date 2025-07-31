module.exports = {
  extends: ["next", "next/core-web-vitals", "eslint:recommended"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off", // ❌ matikan larangan pakai `any`
    "@typescript-eslint/no-unused-vars": "off", // ❌ matikan warning variabel tidak terpakai
    "react-hooks/exhaustive-deps": "off", // ❌ matikan warning useEffect deps
    "@next/next/no-img-element": "off", // ❌ matikan warning <img>
  },
};
