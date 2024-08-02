import prisma from "@/libs/prisma";

export async function POST(req) {
  const { anime_mal_id, user_email } = await req.json();
  const data = {
    anime_mal_id,
    user_email,
  };

  const createCollection = await prisma.collection.create({ data });
  if (!createCollection)
    return Response.json({ status: 500, isCreated: false });
  else return Response.json({ status: 200, isCreated: true });
}
