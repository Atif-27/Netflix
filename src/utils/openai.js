import OpenAI from "openai";
import { OPENAI_API } from "./contants";

const openai = new OpenAI({
  apiKey: OPENAI_API,
  dangerouslyAllowBrowser: true,
});

export default openai;
