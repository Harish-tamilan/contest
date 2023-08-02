import { connectToDatabase } from "@/mongoConnect";
import { getUserResults } from "@/service/userService";

async function handler(req, res){
    await connectToDatabase();
    const response = await getUserResults(req.query.contestId);
    res.status(response.statusCode).json(response);
}

export default handler;