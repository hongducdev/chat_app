import styled from "styled-components";
import { Conversation } from "../../types";
import { useRecipient } from "../../hooks/userRecipient";
import RecipientAvatar from "./RecipientAvatar";
import { useRouter } from "next/router";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  word-break: break-all;

  :hover {
    background-color: whitesmoke;
  }
`;

const ConversationSellect = ({
  id,
  conversationUsers,
}: {
  id: string;
  conversationUsers: Conversation["users"];
}) => {
  const { recipient, recipientEmail } = useRecipient(conversationUsers);

  const router = useRouter();

  const handleSelectConversation = () => {
    router.push(`/conversations/${id}`);
  };

  return (
    <StyledContainer onClick={handleSelectConversation}>
      <RecipientAvatar recipient={recipient} recipientEmail={recipientEmail} />
      {recipientEmail}
    </StyledContainer>
  );
};

export default ConversationSellect;
