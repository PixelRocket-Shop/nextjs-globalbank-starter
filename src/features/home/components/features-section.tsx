import React from 'react';
import Image from 'next/image';
import featuresData from '../../../data/features.json';

interface FeaturesData {
  brandLogos: string[];
}

const FeaturesSection: React.FC = () => {
  if (!featuresData) {
    return null;
  }

  const brandLogos = (featuresData as FeaturesData).brandLogos;

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="mb-20 md:max-w-xl text-center mx-auto">
          <span className="inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter">
            Core Card
          </span>
          <h2 className="font-heading text-6xl lg:text-7xl text-white tracking-tighter-xl">
            Features
          </h2>
        </div>
        <div className="relative mb-10 py-20 px-16 bg-gradient-radial-dark overflow-hidden border border-gray-900/30 rounded-5xl">
          <div className="max-w-6xl mx-auto">
            <div className="relative z-10 flex flex-wrap items-center -m-8">
              <div className="w-full md:w-1/2 p-8">
                <div className="max-w-md mx-auto text-center">
                  <h2 className="mb-6 text-6xl text-white tracking-tighter-xl">
                    Real-time Analytics
                  </h2>
                  <p className="text-white text-opacity-60">
                    Track your spending habits and financial goals with advanced analytics. Our dashboard provides instant insights into your financial health and spending patterns.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-8">
                <Image
                  className="mx-auto md:mr-0"
                  src="/images/dashboard.png"
                  alt=""
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
          <Image
            className="absolute bottom-0 left-0"
            src="/images/bg-gray.png"
            alt=""
            width={400}
            height={300}
          />
        </div>
        <div className="flex flex-wrap -m-5">
          <div className="w-full md:w-1/2 p-5">
            <div className="relative px-16 pt-14 pb-16 h-full bg-gradient-radial-dark overflow-hidden border border-gray-900/30 rounded-5xl">
              <Image className="mb-14" src="/images/cards.png" alt="" width={300} height={200} />
              <div className="relative z-10 max-w-sm text-center mx-auto">
                <h2 className="mb-6 text-6xl text-white tracking-tighter">
                  Smart Payment Cards
                </h2>
                <p className="text-white text-opacity-60">
                  Experience next-generation banking with our contactless payment cards. Enhanced security features and instant transaction notifications keep you in control.
                </p>
              </div>
              <Image
                className="absolute bottom-0 right-0"
                src="/images/bg-gray-2.png"
                alt=""
                width={400}
                height={300}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 p-5">
            <div className="relative px-16 pt-14 pb-16 h-full bg-gradient-radial-dark overflow-hidden border border-gray-900/30 rounded-5xl">
              <div className="mb-14 max-w-sm mx-auto">
                <div className="flex flex-wrap justify-center">
                  {brandLogos.map((logo, index) => (
                    <div key={index} className="w-auto p-2">
                      <div className="flex items-center justify-center w-24 h-24 bg-gradient-radial-dark border border-gray-900/30 rounded-5xl">
                        <Image src={logo} alt="" width={40} height={40} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative z-10 max-w-sm text-center mx-auto">
                <h2 className="mb-6 text-6xl text-white tracking-tighter">
                  Global Partnerships
                </h2>
                <p className="text-white text-opacity-60">
                  Access your funds worldwide through our extensive network of partner institutions. Seamless international banking with competitive exchange rates and low fees.
                </p>
              </div>
              <Image
                className="absolute bottom-0 right-0"
                src="/images/bg-gray-2.png"
                alt=""
                width={400}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;