export interface ContactFormDTO {
  name: string;
  email: string;
  phone: string;
  clientType: string;
  agencyName: string;
  details: string;
  budget: string;
}

export const contactFormApi = async (req: ContactFormDTO): Promise<void> => {
  const url = `/api/MyForm.tsx`;
  const result = await fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(req),
  });
  if (!result.ok) {
    try {
      const error = JSON.parse(await result.text());
      throw new Error(error.message);
    } catch (e: any) {
      throw new Error(e.message || "Hag diya");
    }
  }
  const response = await result.json();
  const data = response;
  return data;
};
