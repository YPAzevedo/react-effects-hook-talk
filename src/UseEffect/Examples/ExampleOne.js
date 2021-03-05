import {
  Box,
  Text,
  Heading,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from "@chakra-ui/react";
import React from "react";
import ColorBox from "../../components/ColorBox";

function Post({ id }) {
  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, [id]);

  if (!post) {
    return (
      <Box>
        <Text>No post data.</Text>
      </Box>
    );
  }

  return (
    <ColorBox variant="blue">
      <Heading as="h2" size="lg">
        {post.title}
      </Heading>
      <Text>{post.body}</Text>
    </ColorBox>
  );
}

export default function UseEffectExampleOne() {
  const [postId, setPostId] = React.useState(1);

  return (
    <>
      <Heading as="h3" size="lg">
        Main case one - Data Fetching
      </Heading>
      <Text>Change the post ID to fetch a different post.</Text>
      <NumberInput min={1} onChange={setPostId} value={postId} max={100}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text as="strong">Current fethcing Post ID: {postId}</Text>
      <Post id={postId} />
    </>
  );
}
