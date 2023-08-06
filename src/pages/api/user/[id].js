// pages/api/submission.js

import { getUserDetails } from '@/service/userService';
import { connectToDatabase } from '../../../mongoConnect';

export default async function handler(req, res) {
    await connectToDatabase();
    const { id } = req.query;
    const response = await getUserDetails(id);
    return res.status(response.statusCode).json(response);
}
