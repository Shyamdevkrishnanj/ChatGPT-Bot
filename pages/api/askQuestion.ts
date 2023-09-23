import type { NextApiRequest, NextApiResponse } from 'next'
import query from '../../lib/chatgpt';
import admin from 'firebase-admin';
import { adminDb } from '@/firebaseAdmin';

type Data = {
    answer: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { prompt, chatId, model, session } = req.body

    if (!prompt) {
        res.status(400).json({ answer: 'Prompt is required' });
        return;
    }

    if (!chatId) {
        res.status(400).json({ answer: 'Chat ID is required' });
        return;
    }

    // ChatGPT query
    const response = await query(prompt, chatId, model)

    const message: Message = {
        text: response || "We couldnt find the answer",
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id : "ChatGPT",
            name: "ChatGPT",
            avatar: "https://i.imgur.com/7k12EPD.png",
        },
    };

    await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

    res.status(200).json({ answer: message.text });
}