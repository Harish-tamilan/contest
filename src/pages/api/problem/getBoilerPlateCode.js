import { connectToDatabase } from "@/mongoConnect";
import { getBoilerPlateCodeService } from "@/service/problemService";

async function handler(req, res){
    await connectToDatabase();
    const response = await getBoilerPlateCodeService(req.query.problemId, req.query.language);
    res.status(response.statusCode).json(response);
}

export default handler;