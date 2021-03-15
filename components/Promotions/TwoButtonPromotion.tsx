import * as React from 'react';

type Props = {
  // post: IPost
  // deletePost: (id: number) => void
};

const TwoButtonPromotion: React.FC<Props> = ({ children }) => {
  return (
    <>
      {/* Two Button Promotion */}
      <div className="container mx-auto items-center flex flex-wrap">
        <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div className="pt-32 sm:pt-0">
            <h2 className="font-semibold text-4xl text-gray-700">Notus NextJS - A beautiful extension for Tailwind CSS.</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Notus NextJS is Free and Open Source. It does not change or add any CSS to the already one from{' '}
              <a href="https://tailwindcss.com/?ref=creativetim" className="text-gray-700" target="_blank">
                Tailwind CSS
              </a>
              . It features multiple HTML elements and it comes with dynamic components for ReactJS, Vue and Angular.
            </p>
            <div className="mt-12">
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index"
                target="_blank"
                className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-600 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                Get started
              </a>
              <a
                href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
                className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg"
                target="_blank"
              >
                Github Star
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TwoButtonPromotion;
