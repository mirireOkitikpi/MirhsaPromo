import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams
  const id:any = searchParams.get("id")
  const idAsNumber = parseInt(id)
  //make a boolean that will flag whether or not the follow button has been pressed
  //

  const nextId = idAsNumber + 1
  const prevId = idAsNumber -1 

  if(idAsNumber === 7){
      return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame 7</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://lavender-decisive-coyote-138.mypinata.cloud/ipfs/QmTiNWZWuH2gJHGUuLPmAtaZ9YES1zSxAMDLhGRNGfSc4Y/Aleph%20Zero.png" />
    <og:image" content="https://lavender-decisive-coyote-138.mypinata.cloud/ipfs/QmTiNWZWuH2gJHGUuLPmAtaZ9YES1zSxAMDLhGRNGfSc4Y/Aleph%20Zero.png"/> 
    <meta property="fc:frame:button:1" content="vBack" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end" />
  </head></html>`);
  } else {
  return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame ${id}</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://lavender-decisive-coyote-138.mypinata.cloud/ipfs/QmTiNWZWuH2gJHGUuLPmAtaZ9YES1zSxAMDLhGRNGfSc4Y/Near.png" />
    <og:image" content="https://lavender-decisive-coyote-138.mypinata.cloud/ipfs/QmTiNWZWuH2gJHGUuLPmAtaZ9YES1zSxAMDLhGRNGfSc4Y/Near.png"/> 
    <meta property="fc:frame:button:1" content="Next Page" />
    <meta property="fc:frame:post_url" content="https://lavender-decisive-coyote-138.mypinata.cloud/ipfs/QmTiNWZWuH2gJHGUuLPmAtaZ9YES1zSxAMDLhGRNGfSc4Y/avalanche.jpg" />
  </head></html>`);
  }
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';