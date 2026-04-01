import axios from 'axios';
import '../config/config.js';

export const generateRandomBlog = async () => {
    const prompt = `Generate a random, interesting blog article about any tech topic. 
Return ONLY in this exact JSON format (no extra text):
{
  "title": "Your creative title here",
  "content": "Your full article content here"
}`;

    try {
        const response = await axios.post(
            'https://api.groq.com/openai/v1/chat/completions',
            {
                model: "llama-3.3-70b-versatile", // make sure this model is valid
                messages: [
                    { role: "user", content: prompt }
                ],
                max_tokens: 1500,
                temperature: 1.0
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        const result = response.data.choices?.[0]?.message?.content;
        if (!result) {
            console.error("No content returned from Groq API:", response.data);
            throw new Error("Empty response from Groq API");
        }

        const jsonMatch = result.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            const parsed = JSON.parse(jsonMatch[0]);
            return { title: parsed.title, content: parsed.content };
        }

        // fallback if JSON parsing fails
        return { title: "AI Generated Tech Article", content: result };

    } catch (error) {
        // log full error for debugging
        console.error("Random blog generation failed:", {
            message: error.message,
            response: error.response?.data,
            stack: error.stack
        });

        return {
            title: "Error Generating Random Blog",
            content: "Failed to generate content"
        };
    }
};
