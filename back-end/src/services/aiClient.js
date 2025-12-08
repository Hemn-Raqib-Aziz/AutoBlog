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
                model: "llama-3.3-70b-versatile",
                messages: [
                    {
                        role: "user",
                        content: prompt
                    }
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

        const result = response.data.choices[0].message.content;
        
        
        const jsonMatch = result.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            const parsed = JSON.parse(jsonMatch[0]);
            return {
                title: parsed.title,
                content: parsed.content
            };
        }
        
        return {
            title: "AI Generated Tech Article",
            content: result
        };

    } catch (error) {
        console.error("Random blog generation failed:", error.response?.data || error.message);
        return {
            title: "Error Generating Random Blog",
            content: "Failed to generate content"
        };
    }
};