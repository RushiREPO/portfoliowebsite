export const getOpenAIResponse = async (message: string) => {
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });

    if (!res.ok) {
      console.error('Server returned', res.statusText);
      return "The AI persona is currently offline, but Rushikesh is ready to talk! Reach out via E-mail.";
    }

    const data = await res.json();
    return data.reply || "I'm sorry, I couldn't process that.";
  } catch (err) {
    console.error('Fetch error:', err);
    return "The AI persona is currently offline, but Rushikesh is ready to talk! Reach out via E-mail.";
  }
};
