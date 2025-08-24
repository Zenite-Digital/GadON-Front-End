const ANIMAIS_URL = "/animais"

const findAllAnimais = async () => {
  const response = await fetch(ANIMAIS_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch animais");
  }
  return response.json();
}