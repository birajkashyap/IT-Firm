import axios from "axios";

const GOOGLE_SHEET_URL = `https://sheets.googleapis.com/v4/spreadsheets/1Ep_-WkUBprO9Lxtpe6hLaeNjBGy_92ipckgwG_dkwmY/values/Sheet1?key=AIzaSyAnwWaR9qN6kTLWrGE3sAxD96As93jQ9cY`;

export async function fetchSheetContent(): Promise<Record<string, string>> {
  try {
    const response = await axios.get(GOOGLE_SHEET_URL);
    const values: string[][] = response.data.values || [];

    if (values.length < 2) {
      throw new Error("Invalid sheet structure");
    }

    const [keys, ...rows] = values;

    const content: Record<string, string> = rows.reduce((acc, row) => {
      const key: string = row[0] || "Unknown";
      const value: string = row[1] || "Dummy content";
      acc[key] = value;
      return acc;
    }, {} as Record<string, string>);

    return content;
  } catch (error) {
    console.error("Error fetching Google Sheets data:", error);
    return {
      "About Us": "Dummy content",
      Services: "Dummy content",
      "Why Choose Us?": "Dummy content",
      "How It Works": "Dummy content",
      "Contact Us": "Dummy content",
    };
  }
}
