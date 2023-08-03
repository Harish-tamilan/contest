import { connectToDatabase } from "@/mongoConnect";
import { submitProblemService } from "@/service/problemService";

async function handler(req, res){
    await connectToDatabase();
    const response = await submitProblemService(JSON.parse(req.body));
    res.status(response.statusCode).json(response);
}

export default handler;