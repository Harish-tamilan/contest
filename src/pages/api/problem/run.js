import { connectToDatabase } from "@/mongoConnect";
import { runProblemService } from "@/service/problemService";

async function handler(req, res){
    await connectToDatabase();
    const response = await runProblemService(JSON.parse(req.body));
    res.status(response.statusCode).json(response);
}

export default handler;