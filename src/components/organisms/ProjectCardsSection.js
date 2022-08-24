import CardItem from "../molecules/ProjectCards/CardItem";

const ProjectCardsSection = () => {
  let items = [
    "Project #1",
    "Project #2",
    "Project #3",
    "Project #4",
    "Project #5",
    "Project #6",
  ];

  let itemList = [];
  items.forEach((item, index) => {
    itemList.push(
      <CardItem
        title={item}
        text="Example technology"
        description="Example description"
      />
    );
  });

  return (
    <>
      <span className="grid grid-cols-3 px-10">{itemList}</span>
    </>
  );
};

export default ProjectCardsSection;
