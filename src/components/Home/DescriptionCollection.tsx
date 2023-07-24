import styles from "@/styles/Home.module.css";

import {Container} from "@/components/ui";

const DescriptionCollection = () => {
  return (
    <Container className={`${styles.info} relative sm:h-screen md:h-screen `}>
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-20 w-full object-cover md:h-full md:w-48"
            src="/images/description-project/cover1.jpg"
            alt="Modern building architecture"
          />
        </div>
        <div className="p-8">
          <h2 className="uppercase">Welcome to the Lujan's Club</h2>
          <p className="mt-2">
            Explore Lujan's Club, offering an exclusive collection of 9,999 NFTs
            that merge life, technology, and art in an immersive journey through
            the vibrant streets of Medellín. Discover unique experiences and
            special discounts across the city. Join us for an extraordinary NFT
            adventure in Medellín. Don't miss out!
          </p>
        </div>
      </div>
    </Container>
  );
};

export default DescriptionCollection;
