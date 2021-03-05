import React from "react";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Text
} from "@chakra-ui/react";
import ColorButton from "../../components/ColorButton";
import Emoji from "../../components/Emoji";

function ClearInternalStateForm({ title }) {
  const [email, setEmail] = React.useState("");
  // ⛔️ Comment this useEffect used as an observable
  // to clear internal state.
  React.useEffect(() => {
    setEmail("");
  }, [title]);

  return (
    <FormControl id={title}>
      <FormLabel>Email address</FormLabel>
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        type="email"
      />
      <FormHelperText>
        Provide your email for: <Text as="strong">{title}</Text>
      </FormHelperText>
    </FormControl>
  );
}

export default function UseEffectExampleFour() {
  const [selectedForm, setSelectedForm] = React.useState("form1");

  const changeFormSelected = (e) => setSelectedForm(e.currentTarget.id);

  return (
    <>
      <Heading as="h3" size="lg">
        Not advised use case - Observale / Clear internal state
      </Heading>
      <Text>
        Uncomment the code with <Emoji emoji="✅" label="check-mark" /> and
        comment the code with <Emoji emoji="⛔️" label="error-mark" />
      </Text>
      <ColorButton id="form1" variant="blue" onClick={changeFormSelected}>
        Form 1
      </ColorButton>
      <ColorButton id="form2" variant="green" onClick={changeFormSelected}>
        Form 2
      </ColorButton>
      {/* ⛔️ Comment the component below */}
      <ClearInternalStateForm title={selectedForm} />
      {/* ✅ Uncomment the component below */}
      {/* <ClearInternalStateForm key={selectedForm} title={selectedForm} /> */}
    </>
  );
}
