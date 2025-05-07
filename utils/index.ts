const pattern = /[\u0600-\u06FF\u0750-\u077F]/;
export const isFarsi = (text: string) => pattern.test(text);
