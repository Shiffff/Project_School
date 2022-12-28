import React from "react";
import NewPostForm from "../../components/public/Post/NewPostForm";
import Thread from "../../components/public/Post/Thread";

const Home = () => {
  return (
    <div className="home">
      <div className="main">
        <NewPostForm />
        <Thread />
      </div>
    </div>
  );
};

export default Home;
