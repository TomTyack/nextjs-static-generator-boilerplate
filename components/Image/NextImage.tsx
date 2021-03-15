import * as React from 'react';
import Image from 'next/image';

type Props = {
  // post: IPost
  // deletePost: (id: number) => void
};

const NextImage: React.FC<Props> = ({ children }) => {
  return (
    <div className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px">
      {/* Next Image */}
      <Image
        alt="..."
        layout="responsive"
        width={600}
        height={400}
        src="/pattern_nextjs.png"   
        className=""     
        />
    </div>
  );
};

export default NextImage;
