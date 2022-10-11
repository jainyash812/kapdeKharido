import CategoryCardContainer from "../../components/category-card-container/category-card-container.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      //imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      imageUrl: "https://i.insider.com/61d337cc99a7690019de68b0",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "mens",
      //imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      imageUrl:
        "https://www.iwmbuzz.com/wp-content/uploads/2020/05/check-out-virat-kohli-and-his-best-fashion-moments.jpg",
    },
  ];

  return <CategoryCardContainer categoriesData={categories} />;
};
export default Home;
