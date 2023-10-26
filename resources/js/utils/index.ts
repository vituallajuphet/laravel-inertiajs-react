export const elliptext = (text?: string) => {
    if (!text) return "";
    return text?.length >= 38 ? text.slice(0, 40) + "..." : text;
};
