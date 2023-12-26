import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import useGetFeedPosts from "../../hooks/useGetFeedPosts";

const FeedPosts = () => {
  const { isLoading, posts } = useGetFeedPosts();

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap="2">
              <SkeletonCircle size="10" />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height="10px" w={"200px"} />
                <Skeleton height="10px" w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"400px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading &&
        posts.length > 0 &&
        posts.map((post) => <FeedPost key={post.id} post={post} />)}
      {!isLoading && posts.length === 0 && (
        <div
          style={{
            margin: "auto",
            width: "50%",
            paddingTop: "40%",
          }}
        >
          <Text color={"white"}>
            Looks like you&apos;re just getting started.
          </Text>
          <Text fontSize={"md"} color={"white"}>
            Start connecting with friends, family, and others who share your
            interests.
          </Text>
          <Text fontSize={"md"} color={"white"}>
            Don&apos;t forget to complete your profile to let others know about
            the awesome person behind the account!
          </Text>
        </div>
      )}
    </Container>
  );
};

export default FeedPosts;
