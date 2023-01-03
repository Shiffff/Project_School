import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { isEmpty } from "../../../utils/utils";
import Card from "./Card";
import { setPostData } from "../../../feature/post.slice";
import { postService } from "../../../services/post.service";

const Thread = () => {
  const dispatch = useDispatch();
  const [loadPost, setLoadPost] = useState(true);
  const [count, setCount] = useState(10);
  const postData = useSelector((state) => state.post.post);

  const loadMore = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.scrollingElement.scrollHeight
    ) {
      setLoadPost(true);
    }
  };

  useEffect(() => {
    if (loadPost) {
      postService
        .getAllPost(count)
        .then((res) => {
          const array = res.data;
          dispatch(setPostData(array));
          setLoadPost(false);
          setCount(count + 5);
        })
        .catch((err) => console.log(err));
    }
    window.addEventListener("scroll", loadMore);
    return () => window.removeEventListener("scroll", loadMore);
  }, [loadPost, dispatch, count]);

  return (
    <div className="thread-container">
      <ul>
        {!isEmpty(postData[0]) &&
          postData.map((post) => {
            return <Card post={post} key={post._id} />;
          })}
      </ul>
    </div>
  );
};

export default Thread;
