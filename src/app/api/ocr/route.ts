import tesseract from "node-tesseract-ocr";

const img =
  "https://tesseract.projectnaptha.com/img/eng_bw.png";

const config = {
  lang: "eng",
  oem: 1,
  psm: 3,
};

export async function GET() {
  try {
    const text = await tesseract.recognize(img, config);

    console.log("OCR Result:", text);

    return Response.json({
      success: true,
      text,
    });
  } catch (error) {
    console.error("OCR Error:", error);

    return Response.json(
      {
        success: false,
        message: "OCR failed",
      },
      {
        status: 500,
      }
    );
  }
}