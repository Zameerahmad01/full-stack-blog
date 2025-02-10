import PostItem from "./PostItem";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const fetchPosts = async (pageParams) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
    params: {
      page: pageParams,
      limit: 2,
    },
  });
  return res.data;
};

const PostsList = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 1 : undefined,
  });

  const allPosts = data?.pages.flatMap((page) => page.posts) || [];

  if (status === "pending") {
    return <span> Loading...</span>;
  }

  if (status === "error") {
    return "something went wrong";
  }

  console.log(data);

  return (
    <InfiniteScroll
      dataLength={allPosts.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p>
          <b>All posts are loaded!</b>
        </p>
      }
    >
      {allPosts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </InfiniteScroll>
  );
};

export default PostsList;
