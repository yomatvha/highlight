import Video from "./Video";
import Article from "./Article";

function List(props) {
  return props.list.map((item, index) => {
    switch (item.type) {
      case 'video':
        return (
          <Video key={index} {...item} />
        );

      case 'article':
        return (
          <Article key={index} {...item} />
        );
    }
  });
};

export default List
