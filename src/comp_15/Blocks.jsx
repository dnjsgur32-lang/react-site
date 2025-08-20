import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;     /* 블록 줄바꿈 */
  gap: 1rem;           /* 블록 사이 간격 */
  background-color: lightgrey;
`;

const Block = styled.div`
  padding: ${(props) => props.padding};
  border: 1px solid black;
  border-radius: 1rem;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const blockItems = [
  { label: "1", padding: "1rem", backgroundColor: "red" },
  { label: "2", padding: "3rem", backgroundColor: "green" },
  { label: "3", padding: "2rem", backgroundColor: "blue" },
];

function Blocks() {
  return (
    <Wrapper>
      {blockItems.map((blockItem) => (
        <Block
          key={blockItem.label}  // ✅ key 추가
          padding={blockItem.padding}
          backgroundColor={blockItem.backgroundColor}
        >
          {blockItem.label}
        </Block>
      ))}
    </Wrapper>
  );
}

export default Blocks;
