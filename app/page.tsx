import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
        label: "Next"
    }
  ],
  image: `https://lavender-decisive-coyote-138.mypinata.cloud/ipfs/QmTiNWZWuH2gJHGUuLPmAtaZ9YES1zSxAMDLhGRNGfSc4Y/Aleph%20Zero.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'Mirsha Promotions',
  description: 'idk',
  openGraph: {
    title: 'Mirsha Promotions',
    description: 'idk',
    images: [`https://lavender-decisive-coyote-138.mypinata.cloud/ipfs/QmTiNWZWuH2gJHGUuLPmAtaZ9YES1zSxAMDLhGRNGfSc4Y/Near.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Cosmic Cowboys</h1>
    </>
  );
}
