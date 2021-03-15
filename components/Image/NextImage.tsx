import * as React from 'react';
import Image from 'next/image';

type Props = {
  // post: IPost
  // deletePost: (id: number) => void
};

const NextImage: React.FC<Props> = ({ children }) => {
  return (
    <>
      {/* Next Image */}
      <Image
        alt="..."
        layout="fill"
        src="/assets/img/pattern_nextjs.png"
        className=""
        />
    </>
  );
};

export default NextImage;
